import { Button, Grid, styled, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { ZoomInPaper } from '../components/papers/ZoomInPaper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { knowitDigitalLolipop, knowitSand } from '../styles/colors'
const StyledAnchor = styled('a')({
  color: knowitSand,
  textUnderlineOffset: '3px',
  textDecorationColor: knowitDigitalLolipop,
})

const RegistrationPage: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={2000} paperVariant='glass'>
      <Grid container spacing={2} alignItems={'center'} direction='column'>
        <Grid item xs={12}>
          <Typography variant='h4'>Registration</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Before you register, please make yourself familiar with the
            available information in{' '}
            <Link href='/practicalitiesPage' passHref>
              <StyledAnchor>general information</StyledAnchor>
            </Link>
            . This registration is for general participation, if you are
            submitting a talk, please go through{' '}
            <Link href='/practicalitiesPage' passHref>
              <StyledAnchor>call for presentations</StyledAnchor>
            </Link>{' '}
            instead.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            More information regarding speakers and locale will be made
            available in November. The deadline for participant registration is{' '}
            <strong>13. November 2022</strong>.
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href='https://docs.google.com/forms/d/1dng5h2hiLN8Bor55JnGxwK1mCAF8t90bnGu8zRnEjAE'
            passHref
          >
            <Button variant='rounded'>
              <ArrowForwardIcon sx={{ marginRight: '10px' }} />
              <Typography>Register Participation</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </ZoomInPaper>
  )
}

export default RegistrationPage
