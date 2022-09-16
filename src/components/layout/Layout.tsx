import { Stack, styled } from '@mui/material'
import { createContext, Dispatch, SetStateAction } from 'react'
import { Background } from './Background'
import { Navigation } from './Navigation'
import { backgroundTypes, useDefinedBackground } from './useDefineBackground'

const MainStack = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  overflowX: 'hidden',
  position: 'relative',
  transition: '0.3s',
  [theme.breakpoints.down('sm')]: {},
}))

const CenteredFlex = styled('main')(({ theme }) => ({
  display: 'flex',
  flexGrow: '1',
  maxWidth: '1440px',
  width: '100%',
  alignSelf: 'center',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

export const BackgroundContext = createContext<
  [
    backgroundUsed: backgroundTypes,
    setBackgroundUsed: Dispatch<SetStateAction<backgroundTypes>>
  ]
>(['map', () => 'map'])

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { backgroundUsed, setBackgroundUsed } = useDefinedBackground()

  return (
    <BackgroundContext.Provider value={[backgroundUsed, setBackgroundUsed]}>
      <MainStack>
        <Navigation />

        <Background />
        <CenteredFlex>{children}</CenteredFlex>
      </MainStack>
    </BackgroundContext.Provider>
  )
}
