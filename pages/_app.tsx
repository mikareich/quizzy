import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from '../utils/design-system/GlobalStyle'
import lightTheme from '../utils/design-system/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
