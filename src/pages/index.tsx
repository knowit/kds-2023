import { Grid, Typography, Box, styled, Link } from '@mui/material'
import { NextPage } from 'next'
import { ZoomInPaper } from '../components/papers/ZoomInPaper'
import { KDS_Logo_White } from '../utils/svgExporter'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HighlightedText = styled('div')({
  color: 'white',
  border: '1px solid white',
  borderRadius: 50,
  padding: '5px 15px',
  margin: '5px 10px',
  fontSize: '1rem'
})

const HomePage: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={3000}>
      <Grid container spacing={2}>
        <Grid item xs={12} justifyContent='center' marginBottom={4} maxWidth='100%'>
            <KDS_Logo_White sx={{ width: '500px' }} />
        </Grid>
        <Grid item xs={12} width={500} display='flex' justifyContent='center' marginBottom={3}>
          <HighlightedText>
            3rd - 4th February
          </HighlightedText>
          <HighlightedText>
            Copenhagen
          </HighlightedText>
        </Grid>
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
          <Link href='/' underline='hover' variant='body1' color='white' marginBottom={2} fontSize='1rem' width={200} display='flex'>
            <ArrowForwardIcon sx={{ marginRight: '10px' }} />Register speaker
          </Link>
          <Link href='/' underline='hover' variant='body1' color='white' fontSize='1rem' width={200} display='flex'>
            <ArrowForwardIcon sx={{ marginRight: '10px' }} />Register participant
          </Link>
        </Grid>
      </Grid>
    </ZoomInPaper>
  )
}

export default HomePage
