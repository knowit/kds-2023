import { Grid, Typography, Paper, styled } from '@mui/material'
import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'
import Link from 'next/link'
import { knowitDigitalLolipop, knowitSand } from '../src/styles/colors'
const StyledAnchor = styled('a')({
  color: knowitSand,
  textUnderlineOffset: '3px',
  textDecorationColor: knowitDigitalLolipop,
})

const Practicalities: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper variant='glass'>
        <Grid container spacing={2} alignItems={'center'} direction='column'>
          <Grid item>
            <Typography variant='h5'>General information</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Knowit Developer Summit 2023 will be hosted centrally in
              Copenhagen, Denmark. We are in the process of finalizing the venue
              and hotel confirmations and will provide information and
              localization when this is complete, as well as other useful
              information. Any questions can be forwarded to{' '}
              <u>kds@knowit.no</u>. We will rapidly update with more information
              the following month.We also have a{' '}
              <Link href='/CodeOfConduct' passHref>
                <StyledAnchor>Code of Conduct</StyledAnchor>
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'>Registration</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Registration deadlines was on the <b>20th of November</b> and is
              now closed. We thank you for your engagement as we experience
              record breaking interest in the summit. If you wish to enquire
              about late registration, we may have a few spots open. Contact{' '}
              <u>kds@knowit.no</u> and we will see if we have any remaining
              room.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'>Price Model</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Knowit Developer Summit is made by developers, for developers.
              With this egalitarian goal in mind, the price model is flat across
              the board. That means each participant pays the same fee, whether
              they are attending, hosting, or presenting during the conference.
              We bill your office of origin your registration fee, but we highly
              recommend that you check internally before registering if you are
              unsure about your office policy on conferences.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              The fee this year is set at around
              <strong> 3200,- DKK including taxes</strong>. KDS does not carry
              budgets between years, so any funds remaining after hosting will
              be used to lower the cost, and KDS will not be hosted if not
              enough participants are included to foot this cost.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              The following is covered by this cost:
            </Typography>
            <ul>
              <li>Hotel Friday-Saturday (Single room)</li>
              <li>Lunch and dinner (Friday), breakfast and lunch (Saturday)</li>
              <li>Venue</li>
              <li>Merch</li>
            </ul>
            <Typography variant='body1'>
              Travel is NOT included and must be arranged individually.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              You may cancel before the 1st of December 2022 free of charge.
              After this, a cancellation fee up to the full price can be billed
              to your company if neither you nor we can find someone else to
              take your spot. If you wish to cancel or change anything else
              regarding your registration after submission, send a mail to{' '}
              <u>kds@knowit.no</u>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Practicalities
