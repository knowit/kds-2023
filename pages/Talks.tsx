import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material'
import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import directus from '../lib/directus'
import { DirectusConference, DirectusTimeslot } from '../src/types'
import CloseIcon from '@mui/icons-material/Close'
import { BackgroundContext } from '../src/components/layout'
import { knowitPear } from '../src/styles/colors'
import { TalkOverview } from '../src/components/modules'

const Talks: NextPage = () => {
  //Set Background
  const [_, setBackgroundUsed] = useContext(BackgroundContext)
  useEffect(() => {
    setBackgroundUsed('soft1')
  }, [])

  //Populate Talks on pageload
  const [talks, setTalks] = useState<DirectusTimeslot[]>()

  const getTalks = async () => {
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
    if (res.data) {
      const currentConference = res.data.find(
        (conference) => conference
      ) as unknown as DirectusConference
      const fetchedTalks = currentConference.Timeslots.filter(
        (Timeslot) => Timeslot.Type == 'talk'
      )
      setTalks(fetchedTalks.length == 0 ? [] : fetchedTalks)
    }
  }

  useEffect(() => {
    getTalks()
  }, [])

  //Handle tag filtering
  const [tagFilters, setTagFilters] = useState<string[]>([])
  const [filteredTalks, setFilteredTalks] = useState<DirectusTimeslot[]>([])

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
    if (talks) {
      if (tagFilters.length < 1) {
        setFilteredTalks(talks)
      } else {
        setFilteredTalks(
          talks.filter((timeslot) =>
            timeslot.Talk.Tags?.some((tag) => tagFilters.includes(tag))
          )
        )
      }
    }
  }, [tagFilters])

  useEffect(() => {
    if (talks && talks.length > 0) setFilteredTalks(talks)
  }, [talks])

  return (
    <Grid container rowSpacing={2} justifyContent='center' alignItems='center'>
      <Grid item container justifyContent='center' alignItems='center' xs={12}>
        <Paper variant='transparent' sx={{ maxWidth: '1000px' }}>
          <Grid item container>
            <Grid item container justifyContent={'center'}>
              <Typography variant='h3'>{'Talks'}</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Welcome to Knowit Developer Summit! Let yourself be inspired to
                attend this year by browsing the talks submitted to our
                conference. Timeslots and programs will be published at a later
                date.
              </Typography>
              <Grid item>
                <Typography>
                  If you are a presentor and wish to make any changes to your
                  presentation info, contact <u>johnny.bjanesoy@knowit.no </u>.
                  For cancellations or other inquiries, contact{' '}
                  <u>kds@knowit.no</u>
                </Typography>
              </Grid>
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
        {talks === undefined ? (
          <Grid item container justifyContent='center'>
            <CircularProgress size='6rem' color={'secondary'} />
          </Grid>
        ) : talks.length == 0 ? (
          <Typography>Error retrieving talks from Directus</Typography>
        ) : (
          filteredTalks?.map((timeslot, idx) => (
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
          ))
        )}
      </Grid>
    </Grid>
  )
}

export default Talks
