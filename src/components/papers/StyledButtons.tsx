import { Button, styled } from '@mui/material'
import { grey70, knowitPear, knowitSand } from '../../styles/colors'

export const RoundedButton = styled(Button)({
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
})

export const NavigationButton = styled(Button)({
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
})
