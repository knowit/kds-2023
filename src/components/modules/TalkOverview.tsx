import { Button, Grid, Paper, Typography } from '@mui/material'
import { DirectusTimeslot } from '../../types'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PublicIcon from '@mui/icons-material/Public'
import RoomIcon from '@mui/icons-material/Room'
import { DateTime } from 'luxon'

export const TalkOverview = ({
  timeslot,
  tagFilters,
  handleTagClick,
}: {
  timeslot: DirectusTimeslot
  tagFilters: string[]
  handleTagClick: (tag: string) => void
}) => {
  console.log(timeslot.Rooms)
  return (
    <Paper variant='transparent' sx={{ maxWidth: '1000px' }}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container alignItems='center' columnSpacing={1} xs={4}>
            <Grid item>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography>
                {DateTime.fromISO(timeslot.StartTime).toFormat('dd.LL HH:mm')}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems='center' columnSpacing={1} xs={4}>
            <Grid item>
              <RoomIcon />
            </Grid>
            <Grid>
              <Typography>
                {timeslot.Rooms[0].Room_RoomId.Name ?? 'TBA'}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems='center' columnSpacing={1} xs={4}>
            <Grid item>
              <PublicIcon />
            </Grid>
            <Grid item>
              <Typography variant='caption' textTransform={'capitalize'}>
                {timeslot.Talk.Language}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'h5'}>{timeslot.Talk.Title}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='caption'
            sx={{ textTransform: 'capitalize' }}
          >{`${timeslot.Talk.Type} talk (${timeslot.Talk.Duration} minutes)`}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>{timeslot.Talk.Description}</Typography>
        </Grid>
        {timeslot.Talk.Speakers?.map((speaker, idx) => (
          <Grid item key={idx} xs={12}>
            <Typography variant='body2'>
              {`${speaker.Speaker_SpeakerId.SpeakerName} - ${speaker.Speaker_SpeakerId.CompanyName}`}
            </Typography>
            <Typography variant='caption'></Typography>
            <Typography>{speaker.Speaker_SpeakerId.Description}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} spacing={1}>
        {timeslot.Talk.Tags?.map((tag, idx) => (
          <Grid item key={idx} xs={'auto'}>
            <Button
              variant={tagFilters.includes(tag) ? 'tagSelected' : 'tag'}
              onClick={() => handleTagClick(tag)}
            >
              <Typography variant='caption'>{tag}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
