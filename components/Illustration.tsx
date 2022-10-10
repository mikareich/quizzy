import media from '@design-system/mediaQueries'
import { css } from '@emotion/react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IllustrationProps {
  src: StaticImageData
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  alt: string
}

const illustrationStyle = (position: IllustrationProps['position']) => css`
  position: fixed;
  width: clamp(100px, 20vw, 380px);
  padding: 40px;
  top: ${position.includes('top') ? '0' : 'auto'};
  bottom: ${position.includes('bottom') ? '0' : 'auto'};
  left: ${position.includes('left') ? '0' : 'auto'};
  right: ${position.includes('right') ? '0' : 'auto'};

  ${media.lessThan('xl')} {
    display: none;
  }
`

function Illustration({ src, position, alt }: IllustrationProps) {
  return (
    <div css={illustrationStyle(position)}>
      <Image src={src} alt={alt} />
    </div>
  )
}

export default Illustration
