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

export const papers: MuiPaper = {
  variants: [
    {
      props: { variant: 'transparent' },
      style: {
        backgroundColor: 'transparent',
        padding: '2rem',
        maxWidth: '750px',
      },
    },
  ],
}
