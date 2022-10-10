import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import Container from '../components/Container'
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar'
import MetaLayout, { MetaLayoutProps } from './MetaLayout'

interface CenteredLayoutProps extends MetaLayoutProps {
  leftAside?: React.ReactNode
  rightAside?: React.ReactNode
  progressBar?: ProgressBarProps | false
}

const centeredLayoutStyles = css`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template:
    'progress-bar progress-bar progress-bar' auto
    'aside-l content aside-r' 1fr / 1fr auto 1fr;

  ${ProgressBar} {
    grid-area: progress-bar;
  }

  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    grid-area: content;
  }

  aside:first-of-type {
    grid-area: aside-l;
  }

  aside:last-of-type {
    grid-area: aside-r;
  }
`

function CenteredLayout({
  title,
  description,
  children,
  leftAside,
  rightAside,
  progressBar,
}: PropsWithChildren<CenteredLayoutProps>) {
  return (
    <MetaLayout title={title} description={description}>
      <div css={centeredLayoutStyles}>
        {progressBar !== false && <ProgressBar {...progressBar} />}
        <aside>{leftAside}</aside>
        <Container>
          <div>{children}</div>
        </Container>
        <aside>{rightAside}</aside>
      </div>
    </MetaLayout>
  )
}

export default CenteredLayout
