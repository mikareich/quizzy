import { Global, css, useTheme } from '@emotion/react'
import { normalize } from 'polished'
import React from 'react'

function GlobalStyle() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        ${normalize()}

        * {
          box-sizing: border-box;
          transition: all 200ms ease, outline 0ms ease;
          ::selection {
            background-color: ${theme.colors.primaryPalette[100]};
          }
        }

        html {
          background-color: ${theme.colors.background};
          font-family: ${theme.textFont};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  )
}

export default GlobalStyle
