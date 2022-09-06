import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { grey70, hooverColor } from '../../styles/colors'

const SpaceDivider = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
}))

const UnstyledAnchor = styled('a')({ textDecoration: 'none', color: 'inherit' })

const StyledListButton = styled(ListItemButton)({
  paddingLeft: '2rem',
  '&:hover': {
    backgroundColor: grey70,
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const NavListContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '2rem 0rem 0rem',
    width: 375,
  })

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        position: 'absolute',
        right: '0',
      }}
    >
      <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuRoundedIcon sx={{ fontSize: '3rem' }} htmlColor={hooverColor} />
      </IconButton>
      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <NavListContainer onClick={() => setIsMenuOpen(false)}>
          <Box>
            <List disablePadding>
              {navItems.map(({ href, label }, id) => (
                <Box key={id}>
                  <SpaceDivider />
                  <NavItemLink key={id} href={href} text={label} />
                </Box>
              ))}
            </List>
          </Box>
        </NavListContainer>
      </Drawer>
    </Box>
  )
}

interface NavItemConfig {
  text: string
  href: string
}

const NavItemLink = (props: NavItemConfig) => {
  const { href, text } = props

  return (
    <Link href={href} passHref>
      <UnstyledAnchor>
        <NavItem text={text} />
      </UnstyledAnchor>
    </Link>
  )
}

const NavItem = ({ text }: Omit<NavItemConfig, 'href'>) => {
  return (
    <ListItem disablePadding>
      <StyledListButton>
        <ListItemText sx={{ fontSize: '24px' }} primary={text} />
      </StyledListButton>
    </ListItem>
  )
}
