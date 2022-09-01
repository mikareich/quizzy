import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ColorPalette } from '../utils/design-system/colors'

const fixedStyle = css`
  position: fixed;
  top: 0;
`
interface StatusBarProps {
  progress?: number
  fixed?: boolean
  colorPalette?: ColorPalette
}

const StatusBar = styled.div<StatusBarProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: ${(props) =>
    (props.colorPalette
      ? props.colorPalette
      : props.theme.colors.primaryPalette)[100]};

  ${(props) => props.fixed && fixedStyle}

  ::after {
    transition: 200ms;
    postion: absolute;
    display: block;
    content: '';
    width: ${(props) => props.progress || 100}%;
    height: 10px;
    background-color: ${(props) =>
      props.colorPalette
        ? props.colorPalette[500]
        : props.theme.colors.primary};
  }
`

export default StatusBar
