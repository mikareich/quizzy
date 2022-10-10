import OutlineStyle from '@design-system/OutlineStyle'
import media from '@design-system/mediaQueries'
import {
  DynamicStyle,
  propertyDefined,
  propertyNotDefined,
} from '@design-system/propertyUtils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { Text } from './Typography'

interface ButtonProps extends React.ComponentProps<'button'> {
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  as?: React.ElementType
  href?: string
  noUnderline?: boolean
}

const primaryStyle: DynamicStyle<ButtonProps> = ({ theme, disabled }) => css`
  background: ${theme?.colors.primary};
  color: ${theme?.colors.textOnPrimary};

  :hover,
  :focus {
    background: ${!disabled && theme?.colors.primaryLight};
  }
`

const secondayStyle: DynamicStyle<ButtonProps> = ({ theme, disabled }) => css`
  background: ${theme?.colors.secondary};
  color: ${theme?.colors.textOnSecondary};

  :hover,
  :focus {
    background: ${!disabled && theme?.colors.secondaryLight};
  }
`
const outlineStyle: DynamicStyle<ButtonProps> = ({ theme, disabled }) => css`
  border: 2px solid ${theme?.colors.primary};
  color: ${theme?.colors.primary};
  background: transparent;

  :hover,
  :focus {
    background: ${!disabled && theme?.colors.secondaryLight};
  }

  :focus {
    outline: 1px solid ${theme?.colors.primary};
  }
`

const disabledStyle: DynamicStyle<ButtonProps> = () => css`
  opacity: 0.5;
  cursor: not-allowed;
`

const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 48px;

  ${media.lessThan('md')} {
    padding: 5px 10px;
    height: min-content;
    min-height: 36px;
  }

  :focus {
    ${OutlineStyle}
  }

  ${propertyDefined<ButtonProps>('primary', primaryStyle)}
  ${propertyDefined<ButtonProps>('secondary', secondayStyle)}
  ${propertyDefined<ButtonProps>('outline', outlineStyle)}
  
  
  ${propertyNotDefined<ButtonProps>(
    'primary',
    'secondary',
    'outline',
    primaryStyle
  )}
  
  ${propertyDefined<ButtonProps>('disabled', disabledStyle)}


  ${Text} {
    margin: 0;
  }
`

function Button({ children, prefixIcon, suffixIcon, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {prefixIcon}
      <Text color="inherit">{children}</Text>
      {suffixIcon}
    </ButtonContainer>
  )
}

export default Button
