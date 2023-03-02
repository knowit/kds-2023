import { Grid, styled, Link as MuiLink, Paper, Typography } from '@mui/material'
import { NextPage } from 'next'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { KdsLogo } from '../src/components/svgs/KdsLogo'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'

const HighlightedText = styled('div')({
  color: 'white',
  border: '1px solid white',
  borderRadius: 50,
  padding: '5px 15px',
  margin: '5px 10px',
  fontSize: '1rem',
})

const Home: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('map')
  }, [])

  return (
    <ZoomInPaper fadeInMs={2500}>
      <Paper variant='transparent'>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            justifyContent='center'
            marginBottom={4}
            maxWidth='100%'
          >
            <KdsLogo />
          </Grid>
          <Grid
            item
            xs={12}
            width={500}
            display='flex'
            justifyContent='center'
            marginBottom={3}
          >
            <HighlightedText>3rd - 4th February</HighlightedText>
            <HighlightedText>Copenhagen</HighlightedText>
          </Grid>
          <Grid
            item
            xs={12}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Typography>
              Thank you all for making KDS2023 an amazing conference! We look
              forward to seeing you all at KDS 2024
            </Typography>
            <Link href='/Talks' passHref>
              <MuiLink
                underline='hover'
                variant='body1'
                color='white'
                marginBottom={2}
                fontSize='1rem'
                width={200}
                display='flex'
              >
                <ArrowForwardIcon sx={{ marginRight: '10px' }} />
                View Talks
              </MuiLink>
            </Link>
            <Link href='/Schedule' passHref>
              <MuiLink
                underline='hover'
                variant='body1'
                color='white'
                fontSize='1rem'
                width={200}
                display='flex'
              >
                <ArrowForwardIcon sx={{ marginRight: '10px' }} />
                View Program
              </MuiLink>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Home
