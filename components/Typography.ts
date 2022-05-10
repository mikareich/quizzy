import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { defaultTypeScale } from '../utils/design-system/typeScale'

interface TypographyProps {
  color?: string
}

const baseStyle = (props: any) => css`
  color: ${props.color || props.theme.colors.text};
`

export const Title = styled.h1<TypographyProps>`
  ${baseStyle}
  font-size: ${defaultTypeScale.title};
`

const headingStyle = css`
  font-weight: 500;
  line-height: 1.5;
`

export const Heading1 = styled.h1<TypographyProps>`
  ${baseStyle}
  ${headingStyle}
  font-size: ${defaultTypeScale.h1};
`

export const Heading2 = styled.h2<TypographyProps>`
  ${baseStyle}
  ${headingStyle}
  font-size: ${defaultTypeScale.h2};
`

export const Heading3 = styled.h3<TypographyProps>`
  ${baseStyle}
  ${headingStyle}
  font-size: ${defaultTypeScale.h3};
`

export const Heading4 = styled.h4<TypographyProps>`
  ${baseStyle}
  ${headingStyle}
  font-size: ${defaultTypeScale.h4};
`

export const Heading5 = styled.h5<TypographyProps>`
  ${baseStyle}
  ${headingStyle}
  font-size: ${defaultTypeScale.h5};
`

export const TextLg = styled.p<TypographyProps>`
  ${baseStyle}
  font-size: ${defaultTypeScale.textLg};
`

export const Text = styled.p<TypographyProps>`
  ${baseStyle}
  font-size: ${defaultTypeScale.text};
`

export const TextSm = styled.p<TypographyProps>`
  ${baseStyle}
  font-size: ${defaultTypeScale.textSm};
`

export const Link = styled.a<TypographyProps>`
  ${baseStyle}
  color: ${(props) => props.theme.colors.primary};
`
