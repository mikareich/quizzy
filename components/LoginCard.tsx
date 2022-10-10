import media from '@design-system/mediaQueries'
import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import Card from './Card'
import ProgressBar from './ProgressBar'

const cardStyles = css`
  width: clamp(300px, 80vw, 500px);
  padding: 0px !important;
`

const contentStyles = css`
  padding: 40px;

  ${media.lessThan('md')} {
    padding: 20px;
  }
`

function LoginCard({ children }: PropsWithChildren<{}>) {
  return (
    <Card css={cardStyles}>
      <ProgressBar loading />
      <div css={contentStyles}>{children}</div>
    </Card>
  )
}

export default LoginCard
