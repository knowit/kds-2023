import { createTheme } from '@mui/material'
import { grey50, knowitDigitalBlack, knowitSand, trueBlack } from './colors'
import { baseline } from './components/base'
import { buttons } from './components/buttons'
import { papers } from './components/papers'

export const theme = createTheme({
  palette: {
    background: {
      default: trueBlack,
      paper: knowitDigitalBlack,
    },
    text: {
      primary: knowitSand,
      secondary: grey50,
    },
  },

  typography: {
    fontFamily: ['Arial', 'ArialRegular'].join(','),
    h1: {
      fontFamily: 'ArialRegular',
    },
    h2: {
      fontFamily: 'ArialRegular',
    },
    h3: {
      fontFamily: 'ArialRegular',
    },
    h4: {
      fontFamily: 'ArialRegular',
    },
    h5: {
      fontFamily: 'ArialRegular',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '1.25rem',
      fontStyle: 'normal',
    },
    body2: {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '23px',
    },
  },
  components: {
    MuiPaper: papers,
    MuiButton: buttons,
    MuiCssBaseline: baseline,
  },
})
