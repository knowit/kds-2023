import { Grid, Paper, Typography, Box } from '@mui/material'
import Image  from 'next/image'
import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'

const Logo: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])
  return (
    <ZoomInPaper fadeInMs={400}>
      <Paper>
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h3' textAlign={'center'}>Logo</Typography>
          </Grid>
          <Grid item xs={12}>
            <Image src='static\images\KDS_Logo_Black.png' layout='intrinsic' width={802} height={278}/>
          </Grid>
          <Grid item xs={12}>
          <Image src='static\images\KDS_Logo_White.png' layout='intrinsic' width={802} height={278}/>
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Logo
