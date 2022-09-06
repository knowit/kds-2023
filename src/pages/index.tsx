import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import { FadeInPaper } from '../components/papers/FadeInPaper'

const HomePage: NextPage = () => {
  return (
    <FadeInPaper fadeInMs={3000}>
      <Grid container>
        <Grid item>
          <Typography>
            We are happy to announce Knowit Developer Summit 2023: Copenhagen!
          </Typography>
          <br />
          <Typography variant='body1'>
            {`If you are wondering if we skipped a year, fret not. The conference
            has landed on January-February this time, but we'll get back to you
            on the exact date. Call for presentations and more information will
            arive in the beginning of fall 2022. If you wish to help with the
            work, join the comitee, or have any other questions then feel free
            to mail us at kds@knowit.no . In the meantime, you can start to hype
            yourself by checking out KDS 2021 great program. See you soon! - KDS
            Comitee`}
          </Typography>
        </Grid>
      </Grid>
    </FadeInPaper>
  )
}

export default HomePage
