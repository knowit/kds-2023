import { Box, Grid, Stack, styled } from '@mui/material'
import { digitalBlack } from '../../styles/colors'
import { KDS_Logo_White } from '../../utils/svgExporter'
import { Background } from './Background'
import { Navigation } from './Navigation'

const MainStack = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  overflowX: 'hidden',
  position: 'relative',
  transition: '0.3s',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: digitalBlack,
  },
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

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainStack>
      <Navigation />
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Box
            sx={{ width: { sm: '500px', xs: '300px' }, transition: '0.3s' }}
            margin={4}
          >
            <KDS_Logo_White />
          </Box>
        </Grid>
      </Grid>

      <Background />
      <CenteredFlex>{children}</CenteredFlex>
    </MainStack>
  )
}
