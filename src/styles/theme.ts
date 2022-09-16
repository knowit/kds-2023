import { createTheme } from '@mui/material/styles'
import { grey50, knowitDigitalBlack, knowitSand, trueBlack } from './colors'
import { baseline } from './components/base'

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
      fontSize: '1.5rem',
      marginBottom: '20px',
      marginTop: '20px',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'ArialRegular',
      fontSize: '1.25rem',
      marginBottom: '20px',
      marginTop: '20px',
      fontWeight: 600,
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
      fontSize: '1.1rem',
      fontStyle: 'normal',
      padding: '10px 0',
    },
    body2: {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '23px',
      padding: '15px 0',
    },
  },
  components: {
    MuiCssBaseline: baseline,
  },
})
