import { Grid, Paper, styled, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { BackgroundContext } from '../src/components/layout'
import { ZoomInPaper } from '../src/components/papers/ZoomInPaper'

const CleanList = styled('li')({
  listStyleType: 'none',
})

const Faq: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)

  useEffect(() => {
    setBackgroundUsed('soft1')
  }, [])
  return (
    <ZoomInPaper fadeInMs={600}>
      <Paper variant='glass'>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12}>
            <Typography variant='h1' textAlign={'center'}>
              FAQ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' textAlign={'center'}>
              Hotels
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              <CleanList>
                <strong>Q: </strong>When is the hotel check-in?
              </CleanList>
              <CleanList>
                <strong>A: </strong>Checkin opens 15:00 on friday. There are a
                few hours between the last presentation and the dinner when you
                can peacefully check in.
              </CleanList>
              <br />
              <CleanList>
                <strong>Q: </strong> When is the hotel check-out?
              </CleanList>
              <CleanList>
                <strong>A: </strong> The checkout is 12:00 on Saturday. We
                recommend checking out in the morning and storing luggage at the
                venue.
              </CleanList>
              <br />
              <CleanList>
                <strong>Q: </strong> Am I staying at the Imperial or Square
                hotel
              </CleanList>
              <CleanList>
                <strong>A: </strong> You should have received an email with this
                information. If you cannot find the info, contact us at{' '}
                <a>kds@knowit.no</a>
              </CleanList>
              <CleanList>
                <strong>Q: </strong> Is there wifi?
              </CleanList>
              <br />
              <CleanList>
                <strong>A: </strong> Yes! When in pressen, the SSID is pressen.
                Password is pressen19 . If in track four, the hotel has its own
                open network.
              </CleanList>
            </ul>
          </Grid>
          <Grid item>
            <Typography variant='h5'>Travel</Typography>
          </Grid>
          <Grid item>
            <ul>
              <CleanList>
                <strong>Q: </strong> Is the travel costs covered by the
                conference cost?
              </CleanList>
              <CleanList>
                <strong>A: </strong> As stated in{' '}
                <a href='/practicalities'>Practicalities</a>, the conference
                price does not cover travel, nor do we book for people.
              </CleanList>
              <br />
              <CleanList>
                <strong>Q: </strong>How do I get to the conference facility and
                hotels from the airport?
              </CleanList>
              <CleanList>
                <strong>A: </strong>We recommend checking out{' '}
                <a>
                  https://www.visitcopenhagen.com/copenhagen/planning/travel-copenhagen-airport
                </a>
                . The short of it is that we recommend taking the metro. The
                stop closest to the conference facility is Rådhuspladsen, and
                the main central station (Hovedbanegården) is also close by.
              </CleanList>
              <br />
              <CleanList>
                <strong>Q:</strong>Where can I store my luggage?
              </CleanList>
              <CleanList>
                <strong>A:</strong>The conference facility will have an area
                where you can keep your luggage before hotel check-in and after
                hotel check-out. The hotel may also keep your luggage
              </CleanList>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </ZoomInPaper>
  )
}

export default Faq
