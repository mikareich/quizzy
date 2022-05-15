import { css } from '@emotion/react'
import styled from '@emotion/styled'
import OutlineStyle from '../utils/design-system/OutlineStyle'
import media from '../utils/design-system/mediaQueries'

interface TypographyProps {
  color?: string
}

const baseStyle = (props: any) => css`
  color: ${props.color || props.theme.colors.text};
`

export const Title = styled.h1<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.title};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.title};
  }
  ${baseStyle}
`

const headingStyle = css`
  font-weight: 500;
  line-height: 1.5;
`

export const Heading1 = styled.h1<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.h1};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.h1};
  }
  ${headingStyle}
  ${baseStyle}
`

export const Heading2 = styled.h2<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.h2};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.h2};
  }
  ${headingStyle}
  ${baseStyle}
`

export const Heading3 = styled.h3<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.h3};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.h3};
  }
  ${headingStyle}
  ${baseStyle}
`

export const Heading4 = styled.h4<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.h4};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.h4};
  }
  ${headingStyle}
  ${baseStyle}
`

export const Heading5 = styled.h5<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.h5};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.h5};
  }
  ${headingStyle}
  ${baseStyle}
`

export const TextLg = styled.p<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.textLg};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.textLg};
  }
  ${baseStyle}
`

export const Text = styled.p<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.text};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.text};
  }
  ${baseStyle}
`

export const TextSm = styled.p<TypographyProps>`
  font-size: ${(props) => props.theme.mobileTypeScale.textSm};

  ${media('md')} {
    font-size: ${(props) => props.theme.typeScale.textSm};
  }
  ${baseStyle}
`

export const Link = styled.a<TypographyProps>`
  :focus {
    ${OutlineStyle}
  }
  ${baseStyle}
  color: ${(props) => props.color || props.theme.colors.primary};
`
