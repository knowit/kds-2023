import { Fade, Grid, Paper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

/**
 * General paper to be used for content in page.
 * @param fadeIn: Specify (in ms) how long before the element fades in. 0 to disable.
 */
export const FadeInPaper = ({
  fadeInMs,
  children,
}: {
  fadeInMs: number
  children: React.ReactNode
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container justifyContent='center' alignContent='center'>
      <Grid item>
        <Fade in timeout={fadeInMs}>
          <Paper
            variant={isMobile ? 'kdsTransparentPaper' : 'kdsTransparentPaper'}
          >
            {children}
          </Paper>
        </Fade>
      </Grid>
    </Grid>
  )
}
