import Button from '@components/Button'
import Model from '@components/Model'
import QuizButton from '@components/QuizButton'
import QuizContainer, {
  QuizBody,
  QuizFooter,
  QuizHeader,
  QuizNavBar,
} from '@components/QuizContainer'
import { Heading1, Text } from '@components/Typography'
import { Question, Quiz } from '@interfaces/'
import DefaultLayout from '@layouts/DefaultLayout'
import isLoading from '@utils/isLoading'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types'
import React, { useState } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

import quizzes from '../../quizzes'

interface QuestionPageProps {
  quiz: Quiz
  question: Question
}

function QuestionPage({ quiz, question }: QuestionPageProps) {
  const { title } = quiz || {}

  const loading = isLoading()
  const progress = (100 * (question.index + 1)) / quiz.questions.length

  const [showModel, setShowModel] = useState(true)

  return (
    <DefaultLayout
      title={title}
      progressBar={{
        progress,
        loading,
      }}
    >
      <Model
        invisible={!showModel}
        actions={<Button onClick={() => setShowModel(false)}>Ignore</Button>}
      >
        Hey there
      </Model>
      <QuizContainer>
        <QuizNavBar>
          <Text subtitle truncate css={{ lineHeight: 'normal' }}>
            {title}
          </Text>
          <Text subtitle truncate>
            Question 1 of 10
          </Text>
        </QuizNavBar>
        <QuizHeader>
          <Heading1>{question?.question}</Heading1>
        </QuizHeader>
        <QuizBody layout="4x4">
          {question?.answers.map(({ id, answer }) => (
            <QuizButton key={id}>{answer}</QuizButton>
          ))}
        </QuizBody>
        <QuizFooter>
          <Button outline prefixIcon={<MdArrowBack />}>
            Previous question
          </Button>
          <Button suffixIcon={<MdArrowForward />}>Next question</Button>
        </QuizFooter>
      </QuizContainer>
    </DefaultLayout>
  )
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

interface ContextParams {
  [key: string]: string
  quizID: string
  questionIndex: string
}

export function getStaticProps(
  context: GetStaticPropsContext<ContextParams>
): GetStaticPropsResult<QuestionPageProps> {
  const { questionIndex, quizID } = context.params || {}
  const quiz = quizzes.find(({ id }) => id === quizID)
  const question = quiz?.questions[Number(questionIndex) - 1]

  if (!quiz || !question) {
    throw Error('Quiz or question not found')
  }

  return {
    props: {
      quiz,
      question,
    },
  }
}

export default QuestionPage
