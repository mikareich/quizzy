import { css } from '@emotion/react'
import styled from '@emotion/styled'
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
  mode: 'primary' | 'secondary'
}
const Button = styled.button<ButtonProps>`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    (props.mode === 'primary' || !props.mode) && primaryStyle(props.theme)};

  ${(props) => props.mode === 'secondary' && secondayStyle(props.theme)};
`

export default Button
