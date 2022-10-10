import media from '@design-system/mediaQueries'
import { truncateText } from '@design-system/typography'
import { css } from '@emotion/react'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'

import { Quiz } from '../interfaces'
import Button from './Button'
import Link from './Link'
import { Text } from './Typography'

const quizListStyle = css`
  margin-top: 20px;
  width: 100%;
  list-style: none;
  padding: 0;
`

const quizItemStyle = css`
  margin-bottom: 30px;
  padding: 10px 0px;
  gap: 20px;
  display: grid;
  grid-template-areas: 'title description button';
  grid-template-columns: 1fr 2fr auto;

  ${media.lessThan('md')} {
    grid-template-columns: 1fr 0fr auto;
    gap: 10px;
  }

  p:first-of-type {
    ${truncateText}
    grid-area: title;
  }

  p:last-of-type {
    ${truncateText}
    grid-area: description;
  }

  a {
    grid-area: button;
  }
`

interface QuizLayoutProps {
  quizzes: Quiz[]
}

function QuizList({ quizzes }: QuizLayoutProps) {
  return (
    <ul css={quizListStyle}>
      {quizzes.map((quiz) => (
        <li key={quiz.id} css={quizItemStyle}>
          <Text css={{ fontWeight: 'bold' }}>{quiz.title}</Text>
          <Text subtitle>{quiz.description}</Text>
          <Button
            as={Link}
            // @ts-ignore
            href={`/${quiz.id}`}
            noUnderline
            suffixIcon={<MdArrowForward />}
          >
            Start Quiz
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default QuizList
