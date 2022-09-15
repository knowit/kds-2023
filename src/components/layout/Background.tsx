import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

export const Background = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-10',
      }}
    >
      <Image
        src={'/static/images/Main_DotPattern.jpg'}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
        alt='Dotmap image of Denmark, highlighting Copenhagen in pink'
      />
    </Box>
  )
}
