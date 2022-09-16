import { Grid, styled, Link as MuiLink } from '@mui/material'
import { NextPage } from 'next'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { TransparentPaper } from '../src/components/papers/StyledPapers'
import { KdsLogo } from '../src/components/svgs/KdsLogo'
import Link from 'next/link'

const HighlightedText = styled('div')({
  color: 'white',
  border: '1px solid white',
  borderRadius: 50,
  padding: '5px 15px',
  margin: '5px 10px',
  fontSize: '1rem',
})

const Home: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={3000}>
      <TransparentPaper>
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
            <Link
              href='https://docs.google.com/forms/d/1ocxcrA5D20Iss7Z4Ynv4d-ryCAeNBJxk-mCb0JOC-Kk'
              passHref
            >
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
                Register speaker
              </MuiLink>
            </Link>
            <Link
              href='https://docs.google.com/forms/d/1dng5h2hiLN8Bor55JnGxwK1mCAF8t90bnGu8zRnEjAE'
              passHref
            >
              <MuiLink
                underline='hover'
                variant='body1'
                color='white'
                fontSize='1rem'
                width={200}
                display='flex'
              >
                <ArrowForwardIcon sx={{ marginRight: '10px' }} />
                Register participant
              </MuiLink>
            </Link>
          </Grid>
        </Grid>
      </TransparentPaper>
    </ZoomInPaper>
  )
}

export default Home
