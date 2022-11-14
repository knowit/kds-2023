import { Button, Grid, Paper, styled, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { knowitDigitalLolipop, knowitSand } from '../src/styles/colors'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'

const StyledAnchor = styled('a')({
  color: knowitSand,
  textUnderlineOffset: '3px',
  textDecorationColor: knowitDigitalLolipop,
})

const Registration: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper variant='glass'>
        <Grid container spacing={2} alignItems={'center'} direction='column'>
          <Grid item xs={12}>
            <Typography variant='h4'>Registration</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Before you register, please make yourself familiar with the
              available information in{' '}
              <Link href='/Practicalities' passHref>
                <StyledAnchor>general information</StyledAnchor>
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              More information regarding speakers and locale will be made
              available in November. The deadline for participant registration
              has been extended to thr <strong>20th of November 2022</strong>.
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLScFj8XfS7TZjRBCN2PUgw3zFbgy5QxwaX3r8-PHDMnPH_95qg/viewform?usp=sf_link'
              passHref
            >
              <Button variant='roundButton'>
                <ArrowForwardIcon sx={{ marginRight: '10px' }} />
                <Typography>Register Participation</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Registration
