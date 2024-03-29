import OutlineStyle from '@design-system/OutlineStyle'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

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

const affixStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Prefix = styled.div`
  ${affixStyle}
`

const Suffix = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;

  :focus {
    ${OutlineStyle}
  }

  ${affixStyle}
`

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryLight};
  gap: 10px;

  ${Prefix}, ${Suffix} {
    color: ${(props) => props.theme.colors.textLight};
  }

  :hover,
  :focus-within {
    border-color: ${(props) => props.theme.colors.primary};
  }

  :focus-within {
    ${Prefix} {
      color: ${(props) => props.theme.colors.primary};
    }

    ${OutlineStyle}
  }
`

interface InputProps {
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
}
function Input({
  prefixIcon,
  type,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const isPassword = type === 'password'

  const [showPassword, setShowPassword] = React.useState(false)

  const toggleVisibilty = () => setShowPassword(!showPassword)

  return (
    <Container {...props}>
      {prefixIcon && <Prefix>{prefixIcon}</Prefix>}
      <BaseInput {...props} type={isPassword && showPassword ? 'text' : type} />
      {isPassword && (
        <Suffix type="button" onClick={toggleVisibilty}>
          {showPassword ? (
            <MdVisibilityOff size={24} />
          ) : (
            <MdVisibility size={24} />
          )}
        </Suffix>
      )}
    </Container>
  )
}

export default Input
