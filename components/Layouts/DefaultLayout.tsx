import { css } from '@emotion/react'
import React from 'react'
import StatusBar from '../StatusBar'
import MetaLayout, { MetaLayoutProps } from './MetaLayout'

interface DefaultLayoutProps extends MetaLayoutProps {
  statusBarProgress?: number
}

const containerStyles = css`
  width: clamp(280px, 80vw, 1080px);
  margin: 90px auto 0 auto;
`

function DefaultLayout({
  title,
  description,
  statusBarProgress,
  children,
}: React.PropsWithChildren<DefaultLayoutProps>) {
  return (
    <MetaLayout title={title} description={description}>
      <StatusBar progress={statusBarProgress} />
      <main css={containerStyles}>{children}</main>
    </MetaLayout>
  )
}

export default DefaultLayout
