import { Grid, Zoom } from '@mui/material'
import React from 'react'

/**
 * General paper to be used for content in page.
 * @param fadeIn: Specify (in ms) how long before the element fades in. 0 to disable.
 */
export const ZoomInPaper = ({
  fadeInMs,
  children,
}: {
  fadeInMs: number
  children: React.ReactNode
}) => {
  return (
    <Grid container justifyContent='center' alignContent='center'>
      <Grid item maxWidth='100%'>
        <Zoom in timeout={fadeInMs}>
          <div>{children}</div>
        </Zoom>
      </Grid>
    </Grid>
  )
}
