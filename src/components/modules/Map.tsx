import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import Map, { Marker } from 'react-map-gl'
import Link from 'next/link'
import {
  knowitDigitalLolipop,
  knowitDigitalWhite,
  knowitForest,
  knowitLeather,
  knowitMelon,
  knowitPear,
  knowitSand,
} from '../../styles/colors'
const LinkTypography = styled(Typography)({
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'pointer',
  textUnderlineOffset: '4px',
  '&:hover': {
    color: knowitPear,
  },
})

const ColorBox = styled(Box)({
  width: '1rem',
  height: '1rem',
  borderRadius: '1rem',
  marginRight: '1rem',
})

const UnsettedATag = styled('a')({
  all: 'unset',
})
export const CityMap = () => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item container xs={12} columnSpacing={2}>
        <Grid item xs={12} md={3}>
          <Paper variant='glass'>
            <Box display={'flex'} alignItems='center'>
              <ColorBox sx={{ backgroundColor: knowitLeather }} />
              <Link href={'https://www.thesquarecopenhagen.com/'} passHref>
                <UnsettedATag target='_blank'>
                  <LinkTypography variant='h5'>
                    Hotel: The Square
                  </LinkTypography>
                </UnsettedATag>
              </Link>
            </Box>
            <Typography variant='body1'>
              One of the hotels some are staying at is The Square hotel in the
              middle of Copenhagen, close to the Tivoli and City Hall. It is
              only a 10-minute walk from the Central Station to the hotel, and
              only 2 minutes to the conference venue.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant='glass'>
            <Box display={'flex'} alignItems='center'>
              <ColorBox sx={{ backgroundColor: knowitSand }} />
              <Link
                href={'https://www.imperial-hotel-copenhagen.com/'}
                passHref
              >
                <UnsettedATag target='_blank'>
                  <LinkTypography variant='h5'>
                    Hotel: Imperial Hotel
                  </LinkTypography>
                </UnsettedATag>
              </Link>{' '}
            </Box>
            <Typography variant='body1'>
              The other hotel some people are staying at is Imperial hotel. It
              is only a 6-minute walk from the Central Station to the hotel, and
              8 minutes to the conference venue.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant='glass'>
            <Box display={'flex'} alignItems='center'>
              <ColorBox sx={{ backgroundColor: knowitMelon }} />
              <Link
                href={'https://politiken.dk/indland/art7424866/Pressen'}
                passHref
              >
                <UnsettedATag target='_blank'>
                  <LinkTypography variant='h5'>Venue: Pressen</LinkTypography>
                </UnsettedATag>
              </Link>{' '}
            </Box>
            <Typography variant='body1'>
              The conference will be held at Pressen in central Copenhagen, just
              two minutes from the hotel. It is in the old printing press in
              Politikkens Hus, which makes the space feel industrial and unique.
              It’s just a two-minute walk from the hotel, and 10 minutes from
              the Central Station.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper variant='glass'>
            <Box display={'flex'} alignItems='center'>
              <ColorBox sx={{ backgroundColor: knowitDigitalLolipop }} />
              <Link
                href={
                  'https://www.madklubben.dk/restauranter/koebenhavn/food-club/noerrebro'
                }
                passHref
              >
                <UnsettedATag target='_blank'>
                  <LinkTypography variant='h5'>
                    Dinner: Food Club
                  </LinkTypography>
                </UnsettedATag>
              </Link>
            </Box>
            <Typography variant='body1'>
              The main dinner will be held at Nørrebro Food Club, which provides
              an assortment of options for all.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        flexGrow={1}
        minWidth={'200px'}
        minHeight={'400px'}
        marginLeft={1}
        marginRight={1}
      >
        <Map
          mapboxAccessToken='pk.eyJ1Ijoia2Rzam9obiIsImEiOiJjbDkzdnhiZmowMzJjM3VqbmlscjN0OGQ3In0.TkEbwmgl6wiEPELfW9kT7Q'
          initialViewState={{
            latitude: 55.68330754383056,
            longitude: 12.567135883719853,
            zoom: 13,
          }}
          mapStyle='mapbox://styles/kdsjohn/cl92trwcs001k14oz5ogwhst4'
        >
          <Marker
            latitude={55.67618}
            longitude={12.56697}
            color={knowitLeather}
          />
          <Marker latitude={55.67571} longitude={12.56161} color={knowitSand} />

          <Marker latitude={55.67713} longitude={12.5682} color={knowitMelon} />

          <Marker
            latitude={55.68822}
            longitude={12.56287}
            color={knowitDigitalLolipop}
          />
        </Map>
      </Grid>
    </Grid>
  )
}
