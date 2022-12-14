import { Grid, Typography, Paper } from '@mui/material'
import { NextPage } from 'next'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'

const CallForPresentations: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper variant='glass'>
        <Grid container justifyContent={'center'}>
          <Grid item>
            <Typography variant='h3'>Call For Presentations</Typography>
          </Grid>
          <Grid item>
            <strong>The deadline was on the 16th October</strong>. Submissions
            of presentations are now closed. Thank you to all who have
            submitted, we are working on processing them and will give an
            acceptance reply and publish program by months end. If you wish to
            submit a late presentation, contact kds@knowit.no and we will check
            if we have any spots available.
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              While not demanded, we highly encourage participants to submit a
              talk when attending. The goal of the Knowit Developer Summit is to
              provide an arena where knowledge, insights, and experiences can be
              shared between companies, as well as provide excellent
              opportunities for members to get into the public world of
              conferences.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              We accept a broad range of topics as long as centered around
              development – and remember, that is a truly broad topic. As this
              is an internal conference in which all attendees are Knowit
              employees, you may be freer to discuss experiences and insights
              from projects. Is there a talk you wish to submit to a larger
              event that you would like to test run? Maybe get some more mileage
              out of your master thesis, or get an opportunity to talk about
              that really cool side project you’ve been deeply involved in?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              There are three tiers of presentations. Please pick the one
              appropriate for your topic, it is always better to cut down than
              expand.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <i>10 Minute Lightning Talk:</i> Short, concise, and on the clock.
              This is for quickly elaborating on an idea, showing a technique,
              or taking a stand on a topic. Things have to move rapidly, so no
              time will be allocated for Q/A.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <i>30 minute Presentation:</i> Here you have a little more time to
              delve into the topic and this is the default length for KDS. Great
              for user stories, more in-depth on a topic, and general
              exploration. It’s up to you how you would like to balance
              presentations versus Q/A with the audience, but at least 20
              minutes should be the presentation.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              <i>60 Minutes Presentation:</i> Shorter is always better, but not
              all stories are easily told and require extra time. Maybe there is
              a unique problem you’ve worked with that need some background
              information, some technical topic that requires some onboarding,
              or just a topic that you plain want to go really into depth in.
            </Typography>
          </Grid>
          {/*<Grid item>
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLSd1L8AHc1fsbYmXLePW71v4g8SGf-61whxHMwF7oox6br5xQw/viewform?usp=sf_link'
              passHref
            >
              <RoundedButton>
                <ArrowForwardIcon sx={{ marginRight: '10px' }} />
                <Typography>Register Presentation</Typography>
              </RoundedButton>
            </Link>
  </Grid> */}
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default CallForPresentations
