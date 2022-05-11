import { css } from '@emotion/react'
import styled from '@emotion/styled'

const fixedStyle = css`
  position: fixed;
  top: 0;
`
interface StatusBarProps {
  progress?: number
  fixed?: boolean
}
const StatusBar = styled.div<StatusBarProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryPalete[100]};

  ${(props) => props.fixed && fixedStyle}

  ::after {
    transition: 200ms;
    postion: absolute;
    display: block;
    content: '';
    width: ${(props) => props.progress || 100}%;
    height: 10px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export default StatusBar
