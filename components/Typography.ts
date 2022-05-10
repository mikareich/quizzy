import { css } from '@emotion/react'
import styled from '@emotion/styled'
import OutlineStyle from '../utils/design-system/OutlineStyle'
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
  font-size: ${defaultTypeScale.h1};
  ${headingStyle}
  ${baseStyle}
`

export const Heading2 = styled.h2<TypographyProps>`
  font-size: ${defaultTypeScale.h2};
  ${headingStyle}
  ${baseStyle}
`

export const Heading3 = styled.h3<TypographyProps>`
  font-size: ${defaultTypeScale.h3};
  ${headingStyle}
  ${baseStyle}
`

export const Heading4 = styled.h4<TypographyProps>`
  font-size: ${defaultTypeScale.h4};
  ${headingStyle}
  ${baseStyle}
`

export const Heading5 = styled.h5<TypographyProps>`
  font-size: ${defaultTypeScale.h5};
  ${headingStyle}
  ${baseStyle}
`

export const TextLg = styled.p<TypographyProps>`
  font-size: ${defaultTypeScale.textLg};
  ${baseStyle}
`

export const Text = styled.p<TypographyProps>`
  font-size: ${defaultTypeScale.text};
  ${baseStyle}
`

export const TextSm = styled.p<TypographyProps>`
  font-size: ${defaultTypeScale.textSm};
  ${baseStyle}
`

export const Link = styled.a<TypographyProps>`
  :focus {
    ${OutlineStyle}
  }
  ${baseStyle}
  color: ${(props) => props.color || props.theme.colors.primary};
`
