import { useState } from "react"
import { Grid, styled, Typography, useMediaQuery, useTheme, Box, Drawer, makeStyles } from '@mui/material'
import Link from 'next/link'
import { grey70, knowitPear, knowitSand, trueBlack } from '../../styles/colors'
import { KDS_Logo_White } from '../../utils/svgExporter'
import MenuIcon from '@mui/icons-material/Menu'

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
  padding: '5px 0px 5px 30px'
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)
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
        <Grid item key={idx} justifyContent={'end'} sx={{
          display: isMobile ? 'none' : 'block',
        }}>
          <Link href={navItem.href} passHref>
            <StyledAnchor>
              <Typography variant='body2'>{navItem.label}</Typography>
            </StyledAnchor>
          </Link>
        </Grid>
      ))}
      <Grid item justifyContent={'end'}
        sx={{
          display: isMobile ? 'block' : 'none',
        }}>
        <MenuIcon sx={{fontSize: '30px'}} onClick={() => setOpen(true)} />
        <Drawer
          anchor={'right'}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              paddingTop: '50px',
              backgroundColor: trueBlack
            }
          }}
        >
          <Link href='/' passHref>
            <MobileMenuItem onClick={() => setOpen(false)}>
              <Typography variant='body2'>Home</Typography>
            </MobileMenuItem>
          </Link>
          {navItems.map((navItem, idx) => (
              <Link href={navItem.href} passHref>
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
