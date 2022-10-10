import styled from '@emotion/styled'
import FocusTrap from 'focus-trap-react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import React, { PropsWithChildren, useRef } from 'react'

import ProgressBar from './ProgressBar'

interface ModelProps {
  invisible?: boolean
  actions?: React.ReactNode
}

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`

const BackgroundLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModelContent = styled.div``

export const ModelActions = styled.div``

const BodyLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  min-width: 300px;
  max-width: 500px;
  background-color: white;
  display: grid;
  grid-template:
    'progress-bar' auto
    'content' 1fr
    'actions' auto
    / 1fr;

  ${ProgressBar} {
    grid-area: progress-bar;
  }

  ${ModelContent} {
    grid-area: content;
    padding: 20px;
  }

  ${ModelActions} {
    grid-area: actions;
    padding: 20px;
    padding-top: 0px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

function Model({
  children,
  invisible = false,
  actions,
}: PropsWithChildren<ModelProps>) {
  const modelContainer = useRef<HTMLDivElement>(null)
  const modelContent = useRef<HTMLDivElement>(null)

  const opacityAnimation: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {!invisible && (
        <Container
          variants={opacityAnimation}
          animate={!invisible ? 'visible' : 'hidden'}
          initial="hidden"
          exit="hidden"
        >
          <FocusTrap active={!invisible}>
            <div ref={modelContainer}>
              <BackgroundLayer />
              <BodyLayer ref={modelContent}>
                <ProgressBar />
                <ModelContent>{children}</ModelContent>
                <ModelActions>{actions}</ModelActions>
              </BodyLayer>
            </div>
          </FocusTrap>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Model
