import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../layout'
import { ZoomInPaper } from '../papers/ZoomInPaper'

const VenueMap = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper variant='glass'>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography>Track locations</Typography>
            <Typography>
              Due to very high demand this year, we had to extend the conference
              into neighbouring venues. Track 1,2,3 are located in Pressen,
              track 4 right around the corner for the venue and track 5 are in
              the neighbouring hotel.
            </Typography>
            <Image
              src='static\images\allVenues.png'
              layout='responsive'
              width={6036}
              height={4184}
              alt='venue map'
            />
          </Grid>
          <Grid item xs={12}>
            <Typography></Typography>
            <Typography>
              Here are the location for the follwing tracks in pressen
            </Typography>
            <Image
              src='static\images\pressen.png'
              layout='responsive'
              width={1771}
              height={1145}
              alt='pressen map'
            />
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default VenueMap
