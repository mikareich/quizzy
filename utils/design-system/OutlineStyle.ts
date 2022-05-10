import { css, useTheme, withTheme } from '@emotion/react'

const OutlineStyle = () => {
  const theme = useTheme()

  return css`
    outline: 2px solid ${theme.colors.primary};
  `
}

export default OutlineStyle
