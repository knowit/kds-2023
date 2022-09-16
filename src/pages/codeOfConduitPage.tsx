import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import { GlassPaper } from '../components/papers/StyledPapers'
import { ZoomInPaper } from '../components/papers/ZoomInPaper'

const CodeOfConduitPage: NextPage = () => {
  return (
    <ZoomInPaper fadeInMs={2000}>
      <GlassPaper>
        <Grid container justifyContent={'center'}>
          <Grid item>
            <Typography variant='h3'>Conference Code of Conduct</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              All attendees, speakers and organisers at our conference are
              required to agree with the following code of conduct. Organisers
              will enforce this code throughout the event. We expect cooperation
              from all participants to help ensure a safe environment for
              everybody.
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant='body1'>
              Contact anyone in the conference staff (look for staff badge) or
              use the slack channel.
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant='h5'>The Quick Version</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, or religion (or
              lack thereof).
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              {`We encourage inclusive language in conference talks. A good starting
            point towards inclusive language is to avoid default-gendered words
            like "guys"/"gals"/"him"/"her" when talking generally about a group
            of people. A tip is to try out words like "people"/"everyone" or
            "the team"/"the developers".`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              We do not tolerate harassment of conference participants in any
              form. Sexual language and imagery is not appropriate for any
              conference venue, including talks, workshops, parties, Twitter and
              other online media. Conference participants violating these rules
              may be sanctioned or expelled from the conference without a refund
              at the discretion of the conference organisers.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'>The Less Quick Version</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              If a participant engages in harassing behavior, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Conference staff can be identified
              as they will be wearing branded clothing and/or badges.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events
            </Typography>
          </Grid>
        </Grid>
      </GlassPaper>
    </ZoomInPaper>
  )
}

export default CodeOfConduitPage
