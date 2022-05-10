import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import { normalize } from 'polished'

function GlobalStyle() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        ${normalize()}
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.textFont};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  )
}

export default GlobalStyle