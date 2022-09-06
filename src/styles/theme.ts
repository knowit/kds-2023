import { createTheme } from '@mui/material'
import { digitalBlack, digitalWhite, grey50, trueBlack } from './colors'
import { baseline } from './components/base'
import { paper } from './components/paper'

export const theme = createTheme({
  palette: {
    background: {
      default: trueBlack,
      paper: digitalBlack,
    },
    text: {
      primary: digitalWhite,
      secondary: grey50,
    },
  },

  typography: {
    fontFamily: ['Arial'].join(','),
  },
  components: {
    MuiPaper: paper,
    MuiCssBaseline: baseline,
  },
})
