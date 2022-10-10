import { css, useTheme } from '@emotion/react'

function OutlineStyle() {
  const theme = useTheme()

  return css`
    outline: 2px solid ${theme.colors.primary};
  `
}

export default OutlineStyle
