import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material'

interface MuiPaper {
  defaultProps?: ComponentsProps['MuiPaper']
  styleOverrides?: ComponentsOverrides['MuiPaper']
  variants?: ComponentsVariants['MuiPaper']
}

export const paper: MuiPaper = {
  //styleOverrides
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
  variants: [
    {
      props: { variant: 'glass' },
      style: {
        backgroundColor: 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(5px)',
        padding: '1rem',
        maxWidth: '750px',
      },
    },
    {
      props: { variant: 'transparent' },
      style: {
        backgroundColor: 'transparent',
        padding: '1rem',
        maxWidth: '750px',
      },
    },
  ],
}
