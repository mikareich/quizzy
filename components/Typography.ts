import OutlineStyle from '@design-system/OutlineStyle'
import media from '@design-system/mediaQueries'
import { DynamicStyle, propertyDefined } from '@design-system/propertyUtils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

interface TypographyProps {
  color?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  subtitle?: boolean
  truncate?: boolean
}

const isMobile = () => media.lessThan('md')

const headingStyle: DynamicStyle<TypographyProps> = ({ color, theme }) => css`
  color: ${color || theme?.colors.text};
  font-family: ${theme?.headingFont};
  font-weight: 500;
  line-height: 1.5;
`

const textStyle: DynamicStyle<TypographyProps> = ({ color, theme }) => css`
  color: ${color || theme?.colors.text};
  font-family: ${theme?.textFont};
`

const baseStyle: DynamicStyle<TypographyProps> = ({
  bold,
  italic,
  underline,
  strikethrough,
  subtitle,
  truncate,
  theme,
}) => css`
  line-height: normal;

  svg {
    vertical-align: middle;
  }

  ${bold && 'font-weight: bold;'}
  ${italic && 'font-style: italic;'}
  ${underline && 'text-decoration: underline;'}
  ${strikethrough && 'text-decoration: line-through;'}
  ${truncate &&
  'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'}
  ${subtitle && `color: ${theme?.colors.textLight};`}
`

export const Title = styled.h1<TypographyProps>`
  ${headingStyle};
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.title};
  font-weight: 700;
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.title};
  }
`

export const Heading1 = styled.h1<TypographyProps>`
  ${headingStyle}
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.h1};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.h1};
  }
`

export const Heading2 = styled.h2<TypographyProps>`
  ${headingStyle}
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.h2};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.h2};
  }
`

export const Heading3 = styled.h3<TypographyProps>`
  ${headingStyle}
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.h3};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.h3};
  }
`

export const Heading4 = styled.h4<TypographyProps>`
  ${headingStyle}
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.h4};

  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.h4};
  }
`

export const Heading5 = styled.h5<TypographyProps>`
  ${headingStyle}
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.h5};

  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.h5};
  }
`

export const TextLg = styled.p<TypographyProps>`
  ${textStyle};
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.textLg};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.textLg};
  }
`

export const Text = styled.p<TypographyProps>`
  ${textStyle};
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.text};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.text};
  }
`

export const TextSm = styled.p<TypographyProps>`
  ${textStyle};
  ${baseStyle}

  font-size: ${(props) => props.theme?.typeScale.textSm};
  ${isMobile} {
    font-size: ${(props) => props.theme?.mobileTypeScale.textSm};
  }
`

export interface LinkProps
  extends TypographyProps,
    React.ComponentPropsWithoutRef<'a'> {
  noUnderline?: boolean
}

export const Link = styled.a<LinkProps>`
  :focus {
    ${OutlineStyle}
  }

  font-weight: 500;
  color: ${(props) => props.color || props.theme?.colors.primary};
  ${baseStyle}

  ${propertyDefined(
    'noUnderline',
    () =>
      css`
        text-decoration: none;
      `
  )}
`
