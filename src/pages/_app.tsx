import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { theme } from '../styles/theme'
import { Layout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='icon'
          type='image/png'
          href='/static/images/KDS_favicon.ico'
        />
        <title>KDS 2023</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterLuxon} locale={'nb-no'}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
