import React from 'react'
import styled from '@emotion/styled'
import OutlineStyle from '../utils/design-system/OutlineStyle'

const BaseInput = styled.input`
  padding: 0px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  width: 100% !important;

  ::placeholder {
    color: ${(props) => props.theme.colors.textLight};
  }
`

const Affix = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Prefix = Affix.withComponent('div')
const Suffix = Affix.withComponent('div')

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  gap: 10px;

  ${Prefix}, ${Suffix} {
    color: ${(props) => props.theme.colors.textLight};
  }

  :hover,
  :focus-within {
    ${Prefix} {
      color: ${(props) => props.theme.colors.primary};
    }
    border-color: ${(props) => props.theme.colors.primaryLight};
  }

  :focus-within {
    ${OutlineStyle}
  }
`

interface InputProps {
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
}
function Input({
  prefixIcon,
  suffixIcon,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container {...props}>
      {prefixIcon && <Prefix>{prefixIcon}</Prefix>}
      <BaseInput {...props} />
      {suffixIcon && <Suffix>{suffixIcon}</Suffix>}
    </Container>
  )
}

export default Input
