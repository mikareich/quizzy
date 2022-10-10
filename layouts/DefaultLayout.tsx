import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import Button from '../components/Button'
import Container from '../components/Container'
import Model, { ModelActions, ModelContent } from '../components/Model'
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar'
import MetaLayout, { MetaLayoutProps } from './MetaLayout'

interface DefaultLayoutProps extends MetaLayoutProps {
  leftAside?: React.ReactNode
  rightAside?: React.ReactNode
  progressBar?: ProgressBarProps | false
}

const defaultLayoutStyles = css`
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template:
    'progress-bar progress-bar progress-bar' auto
    'aside-l content aside-r' 1fr / 1fr auto 1fr;

  ${ProgressBar} {
    grid-area: progress-bar;
  }

  ${Container} {
    grid-area: content;
  }

  aside {
    position: relative;
  }

  aside:first-of-type {
    grid-area: aside-l;
  }

  aside:last-of-type {
    grid-area: aside-r;
  }
`

function DefaultLayout({
  title,
  description,
  children,
  leftAside,
  rightAside,
  progressBar,
}: PropsWithChildren<DefaultLayoutProps>) {
  return (
    <MetaLayout title={title} description={description}>
      <div css={defaultLayoutStyles}>
        {progressBar !== false && <ProgressBar {...progressBar} />}
        <aside>{leftAside}</aside>
        <Container>{children}</Container>
        <aside>{rightAside}</aside>
      </div>
    </MetaLayout>
  )
}

export default DefaultLayout
