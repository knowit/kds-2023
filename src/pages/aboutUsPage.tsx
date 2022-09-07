import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import { ZoomInPaper } from '../components/papers/ZoomInPaper'

const AboutUsPage: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={2000}>
      <Grid container spacing={1} maxWidth={700}>
        <Grid item>
          <Typography variant='h5' textAlign={'center'} marginBottom='1rem'>
            About KDS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`Knowit Developer Summit (KDS) is Knowit's internal software
            development conference. The conference is put on by, and for, our
            passionate developers at Knowit: we arrange it, we are its speakers,
            and we make up its audience.`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`The ambition for KDS is that it will be held annually and that its
            location varies from year to year. The conference begins during
            Friday around lunchtime and runs until Saturday afternoon.A
            conference dinner is arranged on the Friday evening.`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`Hotels and conference facilities are carefully selected. We strive
            to ensure that accommodation is comfortable and that the conference
            is located near a transportation hub such as an airport, train
            station or bus terminal. The conference is always held in a city
            where Knowit developers live and work, and one or more members of
            the committee must live nearby.`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`The conference committee consists of individuals from various Knowit
            companies. There are no rules regarding who can join the committee;
            new members are welcome to get involved!`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`KDS is financed through cost price, and thus there is no profit
            target. The cost is shared equally between all participants,
            regardless of where you live, whether you are a speaker, audience
            member, or a member of the committee. Travel to and from the
            conference is handled by the participant.`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' textAlign={'center'} marginBottom='1rem'>
            History
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`The idea of holding a conference “by developers, for developers”
            arose sometime in August 2012 within Knowit Objectnet in Norway,
            thanks to Fredrik Vraalsen, Alf Kristian Støyle, Tobias "tobiast"
            Torrissen and Jan Henrik Gundelsby). It was important that the
            conference’s title make clear that the conference was by and for
            developers; thus, Knowit Developer.`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            {`The word "Summit" was added quite undramatically; its use may have
            been inspired by the "Colorado Software Summit". The target group
            for the conference was the passionate system developers from Knowit,
            especially within the Java- and .NET-platforms. The goal was that as
            many of the participants as possible would also be
            speakers—preferably all. With this arrangement, it also became clear
            that no external speakers would be invited.`}
          </Typography>
        </Grid>
      </Grid>
    </ZoomInPaper>
  )
}

export default AboutUsPage
