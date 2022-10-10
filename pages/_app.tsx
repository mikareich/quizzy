import GlobalStyle from '@design-system/GlobalStyle'
import lightTheme from '@design-system/theme'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import React from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
