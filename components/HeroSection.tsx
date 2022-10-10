import styled from '@emotion/styled'
import React from 'react'

import { Heading5, Link, Text, Title } from './Typography'

interface HeroSectionProps {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  creatorLink?: boolean
}

const Container = styled.div`
  display: grid;
  grid-template:
    'title creator' 1fr
    'subtitle subtitle' auto / 1fr auto;
  align-items: center;

  ${Title} {
    grid-area: title;
    margin: 0;
  }

  ${Text} {
    grid-area: creator;
  }

  ${Heading5} {
    grid-area: subtitle;
  }
`

function HeroSection({ title, subtitle, creatorLink }: HeroSectionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Heading5 subtitle>{subtitle}</Heading5>
      {creatorLink ? (
        <Text subtitle>
          created by{' '}
          <Link href="https://github.com/mikareich" subtitle>
            @mikareich
          </Link>
        </Text>
      ) : (
        <div />
      )}
    </Container>
  )
}

export default HeroSection
