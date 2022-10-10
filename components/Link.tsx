import NextLink from 'next/link'
import React from 'react'

import { Link as StyledLink, LinkProps as StyledLinkProps } from './Typography'

interface LinkProps
  extends React.ComponentPropsWithoutRef<'a'>,
    StyledLinkProps {
  href: string
}

function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <StyledLink href="placeholder-link" {...props}>
        {children}
      </StyledLink>
    </NextLink>
  )
}

export default Link
