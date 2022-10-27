import { Stack, styled } from '@mui/material'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { BackgroundTypes } from '../../types/backgroundTypes'
import { Background } from './Background'
import { Navigation } from './Navigation'

const MainStack = styled(Stack)({
  minHeight: '100vh',
  overflowX: 'hidden',
  position: 'relative',
  transition: '0.3s',
})

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
    backgroundUsed: BackgroundTypes,
    setBackgroundUsed: Dispatch<SetStateAction<BackgroundTypes>>
  ]
>(['map', () => 'map'])

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [backgroundUsed, setBackgroundUsed] = useState<BackgroundTypes>('map')

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
