import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next/types'
import React from 'react'
import { MdArrowForward, MdKeyboardArrowLeft } from 'react-icons/md'

import Button from '../../components/Button'
import HeroSection from '../../components/HeroSection'
import Link from '../../components/Link'
import QuizContainer, {
  QuizBody,
  QuizFooter,
  QuizNavBar,
} from '../../components/QuizContainer'
import { Quiz } from '../../interfaces'
import DefaultLayout from '../../layouts/DefaultLayout'
import quizzes from '../../quizzes'
import isLoading from '../../utils/isLoading'

function QuizIntro(quiz: Quiz) {
  const { title, author, id } = quiz

  const loading = isLoading()

  return (
    <DefaultLayout title={title} progressBar={{ loading }}>
      <QuizContainer>
        <QuizNavBar>
          <Link subtitle href="/">
            <MdKeyboardArrowLeft />
            Go back to homepage
          </Link>
        </QuizNavBar>
        <QuizBody>
          <HeroSection title={title} subtitle={`by ${author}`} />
        </QuizBody>
        <QuizFooter align="right">
          <Button
            suffixIcon={<MdArrowForward />}
            as={Link}
            href={`/${id}/1`}
            noUnderline
          >
            Start Quiz
          </Button>
        </QuizFooter>
      </QuizContainer>
    </DefaultLayout>
  )
}

export function getStaticPaths(): GetStaticPathsResult<{ quizID: string }> {
  return {
    paths: quizzes.map(({ id }) => ({
      params: { quizID: id },
    })),
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ quizID: string }>
): Promise<GetStaticPropsResult<any>> {
  const { quizID } = context.params || {}

  const quiz = quizzes.find(({ id }) => id === quizID)
  return {
    props: quiz, // will be passed to the page component as props
  }
}

export default QuizIntro
