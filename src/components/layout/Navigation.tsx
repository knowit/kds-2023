import { Grid, styled, Typography } from '@mui/material'
import Link from 'next/link'
import { grey70, knowitPear, knowitSand } from '../../styles/colors'

const StyledAnchor = styled('a')({
  textDecoration: 'none',
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

interface NavItems {
  href: string
  label: string
}
const navItems: NavItems[] = [
  {
    href: '/',
    label: 'Home',
  },
  { href: '/aboutUsPage', label: 'About Us' },
  { href: '/logoPage', label: 'Logo' },
  { href: '/callForPresentationsPage', label: 'Call For Presentations' },
]

export const Navigation = () => {
  return (
    <Grid
      container
      spacing={2}
      margin={2}
      marginRight={6}
      justifyContent={'right'}
    >
      {navItems.map((navItem, idx) => (
        <Grid item key={idx}>
          <Link href={navItem.href} passHref>
            <StyledAnchor>
              <Typography variant='body2'>{navItem.label}</Typography>
            </StyledAnchor>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
