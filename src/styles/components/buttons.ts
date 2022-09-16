import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material'
import { grey70, knowitPear, knowitSand, trueBlack } from '../colors'

interface MuiButton {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides['MuiButton']
  variants?: ComponentsVariants['MuiButton']
}

export const buttons: MuiButton = {
  variants: [
    {
      props: { variant: 'rounded' },
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
      props: { variant: 'navigation' },
      style: {
        backgroundColor: trueBlack,
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
