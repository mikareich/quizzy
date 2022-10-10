import { ColorPalette } from '@design-system/colors'
import {
  DynamicStyle,
  insertProperty,
  propertyDefined,
  propertyNotDefined,
} from '@design-system/propertyUtils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export interface ProgressBarProps {
  progress?: number
  fixed?: boolean
  colorPalette?: ColorPalette
  loading?: boolean
}

const primaryColor: DynamicStyle<ProgressBarProps> = ({
  colorPalette,
  theme,
}) => (colorPalette ? colorPalette[500] : theme?.colors.primary)

const secondaryColor: DynamicStyle<ProgressBarProps> = ({
  colorPalette,
  theme,
}) => (colorPalette ? colorPalette[100] : theme?.colors.primaryPalette[100])

const fixedStyle: DynamicStyle<ProgressBarProps> = () => css`
  position: fixed;
  top: 0;
`

const loadingStyle: DynamicStyle<ProgressBarProps> = () => css`
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  ::after {
    animation: loading 1s ease-in-out infinite;
  }
`

const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: ${secondaryColor};
  overflow: hidden;

  ::after {
    transition: 200ms;
    postion: absolute;
    display: block;
    content: '';
    width: ${propertyNotDefined('loading', insertProperty('progress'))}%;
    height: 10px;
    background-color: ${primaryColor};
  }
  ${propertyDefined('fixed', fixedStyle)};
  ${propertyDefined('loading', loadingStyle)};
`

export default ProgressBar
