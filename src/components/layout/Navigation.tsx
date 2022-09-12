import { Grid, styled, Typography, Box } from '@mui/material'
import Link from 'next/link'
import { grey70, knowitPear, knowitSand } from '../../styles/colors'
import { KDS_Logo_White } from '../../utils/svgExporter'

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
  { href: '/aboutUsPage', label: 'About' },
  { href: '/callForPresentationsPage', label: 'CFP' },
  { href: 'https://kds-2021.knowit.no/', label: 'KDS 2021' },
]

export const Navigation = () => {
  return (
    <Grid
      container
      spacing={2}
      padding={3}
      justifyContent={'space-between'}
    >
      <Grid item key={'home'} 
        xs={9}
        justifyContent={'left'}>
        <Link href={'/'} passHref>
            <Box
              sx={{ width: '100px' }}
            >
            <KDS_Logo_White />
          </Box>
        </Link>
      </Grid>
      {navItems.map((navItem, idx) => (
        <Grid item key={idx} justifyContent={'end'}>
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
