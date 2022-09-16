import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { ZoomInPaper } from '../components/papers/ZoomInPaper'
import { KDS_Logo_Black, KDS_Logo_White } from '../utils/svgExporter'

const LogoPage: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={0}>
      <Grid item xs={12}>
        <Typography variant='body2'>KDS logo White SVG</Typography>
      </Grid>
      <Grid item xs={12}>
        <KDS_Logo_White />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2'>KDS logo White PNG</Typography>
      </Grid>
      <Grid item xs={12}>
        <Image
          src={'/static/images/KDS_Logo_White.png'}
          layout='fixed'
          width={'685px'}
          height={'250px'}
          objectPosition='center'
          alt='Knowit Developer Summit logo, white version'
        />
      </Grid>
      <Grid container justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <Typography variant='overline'>KDS logo black SVG</Typography>
        </Grid>
        <Grid item xs={12}>
          <KDS_Logo_Black />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>KDS logo black PNG</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            src={'/static/images/KDS_Logo_Black.png'}
            layout='fixed'
            width={'685px'}
            height={'250px'}
            objectPosition='center'
            alt='Knowit Developer Summit logo, black version'
          />
        </Grid>
      </Grid>
    </ZoomInPaper>
  )
}

export default LogoPage
