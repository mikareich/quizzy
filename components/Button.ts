import { css } from '@emotion/react'
import styled from '@emotion/styled'
import OutlineStyle from '../utils/design-system/OutlineStyle'
import { Theme } from '../utils/design-system/theme'

const primaryStyle = (theme: Theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.textOnPrimary};

  :hover,
  :focus {
    background: ${theme.colors.primaryLight};
  }
`

const secondayStyle = (theme: Theme) => css`
  background: ${theme.colors.secondary};
  color: ${theme.colors.textOnSecondary};

  :hover,
  :focus {
    background: ${theme.colors.secondaryLight};
  }
`

interface ButtonProps {
  primary?: boolean
  secondary?: boolean
}
const Button = styled.button<ButtonProps>`
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  :focus {
    ${OutlineStyle}
  }

  ${(props) => props.primary && primaryStyle(props.theme)};

  ${(props) => props.secondary && secondayStyle(props.theme)};

  ${(props) => !props.primary && !props.secondary && primaryStyle(props.theme)};
`

export default Button
