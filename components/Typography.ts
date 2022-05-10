import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { defaultTypeScale } from '../utils/design-system/typeScale'

export const Title = styled.h1`
  font-size: ${defaultTypeScale.title};
`

const headingStyle = css`
  font-weight: 500;
  line-height: 1.5;
`

export const Heading1 = styled.h1`
  ${headingStyle}
  font-size: ${defaultTypeScale.h1};
`

export const Heading2 = styled.h2`
  ${headingStyle}
  font-size: ${defaultTypeScale.h2};
`

export const Heading3 = styled.h3`
  ${headingStyle}
  font-size: ${defaultTypeScale.h3};
`

export const Heading4 = styled.h4`
  ${headingStyle}
  font-size: ${defaultTypeScale.h4};
`

export const Heading5 = styled.h5`
  ${headingStyle}
  font-size: ${defaultTypeScale.h5};
`

const baseTextStyle = css``

export const TextLg = styled.p`
  ${baseTextStyle}
  font-size: ${defaultTypeScale.textLg};
`

export const Text = styled.p`
  ${baseTextStyle}
  font-size: ${defaultTypeScale.text};
`

export const TextSm = styled.p`
  ${baseTextStyle}
  font-size: ${defaultTypeScale.textSm};
`

export const Link = styled.a`
  color: ${(props) => props.theme.colors.primary};
`
