import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'

const Venue: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography variant='h3' textAlign={'center'}>
              Logo
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Image
              src='static\images\allVenues.png'
              layout='intrinsic'
              width={802}
              height={278}
            />
          </Grid>
          <Grid item xs={12}>
            <Image
              src='static\images\pressen.png'
              layout='intrinsic'
              width={802}
              height={278}
            />
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Venue
