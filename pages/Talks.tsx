import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material'
import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import directus from '../lib/directus'
import { DateTime } from 'luxon'
import { DirectusConference, DirectusTimeslot } from '../src/types'
import CloseIcon from '@mui/icons-material/Close'
import { BackgroundContext } from '../src/components/layout'
import { knowitPear } from '../src/styles/colors'
import { TalkOverview } from '../src/components/modules'
interface TalkPageProps {
  talks: DirectusTimeslot[]
  events: DirectusTimeslot[]
}

const Talks: NextPage<TalkPageProps> = ({ talks, events }) => {
  useEffect(() => {
    console.log('banana', talks)
  }, [talks, events])
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('soft1')
  }, [])

  const [tagFilters, setTagFilters] = useState<string[]>([])

  const [filteredTalks, setFilteredTalks] = useState<DirectusTimeslot[]>(talks)

  const handleTagClick = (tag: string) => {
    if (tagFilters?.includes(tag)) {
      const newTagFilters = tagFilters.filter(
        (existingTag) => existingTag != tag
      )
      setTagFilters(newTagFilters)
    } else {
      setTagFilters((oldValues) => [...oldValues, tag])
    }
  }

  const removeTagFilters = () => {
    setTagFilters([])
  }

  useEffect(() => {
    if (tagFilters.length < 1) {
      setFilteredTalks(talks)
    } else {
      setFilteredTalks(
        talks.filter((timeslot) =>
          timeslot.Talk.Tags?.some((tag) => tagFilters.includes(tag))
        )
      )
    }
  }, [tagFilters])
  DateTime
  return (
    <Grid container rowSpacing={2} justifyContent='center' alignItems='center'>
      <Grid item container justifyContent='center' alignItems='center' xs={12}>
        <Paper variant='transparent' sx={{ maxWidth: '1000px' }}>
          <Grid item container>
            <Grid item>
              <Typography variant='h3'>{'Talks [WORK IN PROGRESS]'}</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Welcome to Knowit Developer summit! Let yourself be inspired to
                attend this year by browsing the talks submitted to our
                conference. Timeslots and programs will be published at a later
                date. If you are presenting and wish to make some changes to the
                talk, please send a mail to kds@knowit.no
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item display={tagFilters.length > 0 ? 'block' : 'none'}>
        <Paper variant='transparent' sx={{ maxWidth: '1000px' }}>
          <Typography>Filtered by the following tags:</Typography>
          <IconButton onClick={removeTagFilters} color='error'>
            <CloseIcon />
          </IconButton>
          {tagFilters.map((tag, idx) => (
            <Button
              variant={'tagSelected'}
              onClick={() => handleTagClick(tag)}
              key={idx}
            >
              <Typography variant='caption'>{tag}</Typography>
            </Button>
          ))}
        </Paper>
      </Grid>
      <Grid item container>
        {filteredTalks?.map((timeslot, idx) => (
          <Grid
            item
            container
            key={idx}
            xs={12}
            alignItems='center'
            justifyContent='center'
          >
            <TalkOverview
              timeslot={timeslot}
              tagFilters={tagFilters}
              handleTagClick={handleTagClick}
            />
            <Box width={'50%'} margin={'2rem 0rem'}>
              <Divider color={knowitPear} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await directus.items('Conference').readByQuery({
    limit: 1,
    fields: [
      'Name',
      'Timeslots.Type',
      'Timeslots.StartTime',
      'Timeslots.Talk.*.*',
      'Timeslots.Talk.Speakers.Speaker_SpeakerId.CompanyName',
      'Timeslots.Talk.Speakers.Speaker_SpeakerId.Description',
      'Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerId',
      'Timeslots.Talk.Speakers.Speaker_SpeakerId.SpeakerName',
    ],
    filter: {
      Name: {
        _eq: 'KDS 2023',
      },
    },
  })
  const currentConference: DirectusConference = res.data?.find(
    (conference) => conference
  )
  const happenings: TalkPageProps = {
    talks: currentConference.Timeslots.filter(
      (Timeslot) => Timeslot.Type == 'talk'
    ),
    events: currentConference.Timeslots.filter(
      (Timeslot) => Timeslot.Type == 'event'
    ),
  }
  return {
    props: {
      talks: happenings.talks,
      events: happenings.events,
    },
  }
}

export default Talks
