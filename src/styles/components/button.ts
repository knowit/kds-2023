import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material'
import {
  grey70,
  knowitDigitalLolipop,
  knowitDigitalWhite,
  knowitPear,
  knowitSand,
} from '../colors'

interface MuiButton {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides['MuiButton']
  variants?: ComponentsVariants['MuiButton']
}

export const button: MuiButton = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
  variants: [
    {
      props: { variant: 'tag' },
      style: {
        border: '2px solid',
        borderColor: knowitDigitalWhite,
        borderRadius: '4rem',
        '&:hover': {
          backgroundColor: grey70,
        },
      },
    },
    {
      props: { variant: 'tagSelected' },
      style: {
        border: '2px solid',
        borderColor: knowitDigitalLolipop,
        color: knowitDigitalLolipop,
        borderRadius: '4rem',
      },
    },
    {
      props: { variant: 'roundButton' },
      style: {
        backgroundColor: 'transparent',
        border: '1px solid',
        borderRadius: '1.875rem',
        color: knowitSand,
        '&:hover': {
          color: knowitPear,
          borderColor: knowitPear,
        },
        '&:focus': {
          color: knowitPear,
          borderColor: knowitPear,
          boxShadow: '0px 5px 16px rgba(183, 222, 189, 0.32)',
        },
        '&:active': {
          color: grey70,
          borderColor: grey70,
        },
      },
    },
    {
      props: { variant: 'navigationButton' },
      style: {
        backgroundColor: 'transparent',
        color: knowitSand,
        '&:hover': {
          color: knowitPear,
        },
        '&:focus': {
          color: knowitPear,
        },
        '&:active': {
          color: grey70,
        },
      },
    },
  ],
}
