import { NextPage } from 'next'
import { Grid, Collapse, Button } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useContext, useEffect, useState } from 'react'
import { BackgroundContext } from '../src/components/layout'
import { CityMap } from '../src/components/modules/Map'
import VenueMap from '../src/components/modules/Venue'

const Location: NextPage = () => {
  const [_, setBackgroundUsed] = useContext(BackgroundContext)
  const [currentView, setCurrentView] = useState<string>(storedProcedure())

  function storedProcedure() {
    try {
      const previousEntry = localStorage.getItem('map_currentView')
      if (previousEntry !== null) {
        return previousEntry
      } else {
        return 'cityMap'
      }
    } catch {
      console.error('issue with localstorage...')
      return 'cityMap'
    }
  }

  const onViewChange = (view: string) => {
    setCurrentView(view)
    localStorage.setItem('map_currentView', view)
  }

  useEffect(() => {
    setBackgroundUsed('soft1')
  }, [])

  return (
    <Grid container justifyContent={'center'}>
      <Grid
        item
        container
        spacing={2}
        xs={12}
        justifyContent='center'
        alignItems={'center'}
      >
        <Grid item>
          <Button onClick={() => onViewChange('cityMap')} variant='roundButton'>
            City map
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => onViewChange('venueMap')}
            variant='roundButton'
          >
            Venue Map
          </Button>
        </Grid>
      </Grid>
      <Collapse in={currentView === 'cityMap'}>
        <CityMap />
      </Collapse>
      <Collapse in={currentView === 'venueMap'}>
        <VenueMap />
      </Collapse>
    </Grid>
  )
}

export default Location
