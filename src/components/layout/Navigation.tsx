import { useState } from 'react'
import {
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Drawer,
} from '@mui/material'
import Link from 'next/link'
import { grey70, knowitPear, knowitSand, trueBlack } from '../../styles/colors'
import MenuIcon from '@mui/icons-material/Menu'
import { KdsLogo } from '../svgs/KdsLogo'

const StyledIcon = styled(MenuIcon)({
  fontSize: '40px',
  cursor: 'pointer',
  '&:hover': {
    color: knowitPear,
  },
})

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

const MobileMenuItem = styled('a')({
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
  width: '250px',
  padding: '5px 0px 5px 30px',
})

interface NavItems {
  href: string
  label: string
}
const navItems: NavItems[] = [
  { href: '/AboutKds', label: 'About' },
  { href: '/Schedule', label: 'Schedule' },
  { href: '/Talks', label: 'Talks' },
  { href: '/Location', label: 'Location' },
  { href: '/Practicalities', label: 'Practicalities' },
  { href: '/CodeOfConduct', label: 'Code Of Conduct' },
  //{ href: '/Registration', label: 'Registration' },
  { href: '/Logo', label: 'Logo' },
  { href: 'http://kds-2021.knowit.no/', label: 'KDS 2021' },
]

export const Navigation = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)
  return (
    <Grid
      container
      sx={{ transition: '0.3s' }}
      padding={{ xs: '2rem 3rem 3rem 3rem', md: '3rem 8rem 0rem 8rem' }}
      justifyContent={'space-between'}
    >
      <Grid item key={'home'} xs='auto' justifyContent={'left'}>
        <Link href={'/'} passHref>
          <Box sx={{ width: '200px', cursor: 'pointer' }}>
            <KdsLogo />
          </Box>
        </Link>
      </Grid>
      <Grid
        item
        xs
        container
        justifyContent={'end'}
        sx={{
          display: isMobile ? 'none' : 'inherit',
        }}
        columnGap={'2rem'}
      >
        {navItems.map((navItem, idx) => (
          <Grid item key={idx} xs={'auto'}>
            <Box sx={{ display: 'flex' }}>
              <Link href={navItem.href} passHref>
                <StyledAnchor>
                  <Typography paddingTop={0} variant='body2'>
                    {navItem.label}
                  </Typography>
                </StyledAnchor>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        justifyContent={'end'}
        sx={{
          display: isMobile ? 'block' : 'none',
        }}
      >
        <StyledIcon
          sx={{ fontSize: '40px', cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        />
        <Drawer
          anchor={'right'}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              paddingTop: '50px',
              backgroundColor: trueBlack,
            },
          }}
        >
          <Link href='/' passHref>
            <MobileMenuItem onClick={() => setOpen(false)}>
              <Typography variant='body2'>Home</Typography>
            </MobileMenuItem>
          </Link>
          {navItems.map((navItem, idx) => (
            <Link href={navItem.href} key={idx} passHref>
              <MobileMenuItem onClick={() => setOpen(false)}>
                <Typography variant='body2'>{navItem.label}</Typography>
              </MobileMenuItem>
            </Link>
          ))}
        </Drawer>
      </Grid>
    </Grid>
  )
}
