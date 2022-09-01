import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { ColorPalette } from '../../utils/design-system/colors'
import media from '../../utils/design-system/mediaQueries'
import StatusBar from '../StatusBar'
import MetaLayout, { MetaLayoutProps } from './MetaLayout'

interface DefaultLayoutProps extends MetaLayoutProps {
  statusBarProgress?: number
  colorPalette?: ColorPalette
  illustration?: React.ReactNode
}

const containerStyles = css`
  width: clamp(280px, 80vw, 800px);
  margin: 100px auto 0 auto;
`

const IllustrationContainer = styled.div`
  display: none;
  ${media('xl')} {
    display: block;
    font-size: 50px;
    width: clamp(100px, 15vw, 300px);
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
`

function DefaultLayout({
  title,
  description,
  statusBarProgress,
  colorPalette = useTheme().colors.primaryPalette,
  illustration,
  children,
}: React.PropsWithChildren<DefaultLayoutProps>) {
  return (
    <MetaLayout title={title} description={description}>
      <StatusBar
        colorPalette={colorPalette}
        fixed
        progress={statusBarProgress}
      />
      <main css={containerStyles}>{children}</main>
      {illustration && (
        <IllustrationContainer>{illustration}</IllustrationContainer>
      )}
    </MetaLayout>
  )
}

export default DefaultLayout
