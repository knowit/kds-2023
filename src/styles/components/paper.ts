import {
    ComponentsOverrides,
    ComponentsProps,
    ComponentsVariants,
  } from '@mui/material'
  import { digitalBlack, grey70, hooverColor } from '../colors'
  
  interface MuiPaper {
    defaultProps?: ComponentsProps['MuiPaper']
    styleOverrides?: ComponentsOverrides['MuiPaper']
    variants?: ComponentsVariants['MuiPaper']
  }
  
  export const paper: MuiPaper = {
    variants: [
      {
        props: { variant: 'kdsTransparentPaper' },
        style: {
          backgroundColor: `${digitalBlack}E6`,
          borderRadius: '0.3rem',
          border: '1px solid',
          borderColor: hooverColor,
          padding: '2rem',
          maxWidth: '750px',
        },
      },
      {
        props: { variant: 'kdsMobilePaper' },
        style: {
          backgroundColor: 'transparent',
          borderRadius: '0.3rem',
          padding: '2rem',
          maxWidth: '750px',
        },
      },
    ],
  }
  