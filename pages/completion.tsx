import Illustration from '@components/Illustration'
import Link from '@components/Link'
import { Heading1, TextLg } from '@components/Typography'
import { css } from '@emotion/react'
import CenteredLayout from '@layouts/CenteredLayout'
import UndrawHappy from '@public/undraw_happy.svg'
import isLoading from '@utils/isLoading'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const completionStyle = css`
  text-align: center;
  min-height: 50vh;
`

function Completion() {
  const stats = {
    quizID: 'xDs188',
    quizTitle: 'The Lord of the Rings: The Fellowship of the Ring',
    correct: 5,
    incorrect: 5,
    total: 10,
    timeNeeded: 10,
  }
  const loading = isLoading()

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const { innerWidth, innerHeight } = window
    setDimensions({ width: innerWidth, height: innerHeight })
  }, [])

  return (
    <CenteredLayout
      title="Bla bla"
      progressBar={{ loading }}
      rightAside={
        <Illustration
          src={UndrawHappy}
          alt="Happy Person"
          position="bottom-right"
        />
      }
    >
      <div css={completionStyle}>
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
        />
        <Heading1>Yay, you did it!</Heading1>
        <TextLg>
          Nice work! You&apos;ve completed the quiz <b>{stats.quizTitle}</b>.
          From the {stats.total} questions, you answered{' '}
          <b>{stats.correct} correctly</b> and{' '}
          <b>{stats.incorrect} incorrectly</b>. Did you like the quiz? Share it
          with your friends!
        </TextLg>
        <Link href="/">Go back home</Link> or{' '}
        <Link href={`/${stats.quizID}`}>restart the quiz</Link>.
      </div>
    </CenteredLayout>
  )
}

export default Completion
