import { NextPage } from 'next'
import { Grid, Typography, styled, Box } from '@mui/material'
import { knowitDigitalLolipop, knowitPear } from '../src/styles/colors'
import Link from 'next/link'
import { GlassPaper } from '../src/components/papers/StyledPapers'
import Map, { GeolocateControl, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
const LinkTypography = styled(Typography)({
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'pointer',
  textUnderlineOffset: '4px',
  '&:hover': {
    color: knowitPear,
  },
})

const UnsettedATag = styled('a')({
  all: 'unset',
})

/**
 *
 * @returns
 */
const Location: NextPage = () => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12}>
        <GlassPaper>
          <Grid item container>
            <Grid item xs={6}>
              <Link href={'https://www.thesquarecopenhagen.com/'} passHref>
                <UnsettedATag target='_blank'>
                  <LinkTypography variant='h5'>
                    Hotel: The Square
                  </LinkTypography>
                </UnsettedATag>
              </Link>
              <Grid item>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item>
                <Link
                  href={'https://politiken.dk/indland/art7424866/Pressen'}
                  passHref
                >
                  <UnsettedATag target='_blank'>
                    <LinkTypography variant='h5'>Venue: Pressen</LinkTypography>
                  </UnsettedATag>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </GlassPaper>
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
            latitude: 55.67730754383056,
            longitude: 12.567135883719853,
            zoom: 14,
          }}
          mapStyle='mapbox://styles/kdsjohn/cl92trwcs001k14oz5ogwhst4'
        >
          <Marker
            latitude={55.67618}
            longitude={12.56697}
            color={knowitDigitalLolipop}
          />
          <Marker
            latitude={55.67713}
            longitude={12.5682}
            color={knowitDigitalLolipop}
          />
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

export default Location
