import styled from '@emotion/styled'

interface StatusBarProps {
  progress?: number
}
const StatusBar = styled.div<StatusBarProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryPalete[100]};

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
0
