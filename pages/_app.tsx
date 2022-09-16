import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { theme } from '../src/styles/theme'
import { Layout } from '../src/components/layout'
import createEmotionCache from '../src/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import PropTypes from 'prop-types'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
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
        <LocalizationProvider
          dateAdapter={AdapterLuxon}
          adapterLocale={'nb-no'}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
