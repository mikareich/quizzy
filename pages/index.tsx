import HeroSection from '@components/HeroSection'
import Illustration from '@components/Illustration'
import Input from '@components/Input'
import Link from '@components/Link'
import QuizList from '@components/QuizList'
import media from '@design-system/mediaQueries'
import { css } from '@emotion/react'
import DefaultLayout from '@layouts/DefaultLayout'
import UndrawQuiz from '@public/undraw_quiz.svg'
import isLoading from '@utils/isLoading'
import React from 'react'
import { MdSearch } from 'react-icons/md'

import quizzes from '../quizzes'

const listContainerStyle = css`
  margin-top: 75px;
  display: grid;
  justify-items: end;
  gap: 20px;

  ${media.lessThan('md')} {
    margin-top: 25px;
  }
`

const inputStyle = css`
  width: auto;

  ${media.lessThan('md')} {
    width: 100%;
  }
`

function Home() {
  const loading = isLoading()

  return (
    <DefaultLayout
      title="Quizzy | Home"
      progressBar={{ loading }}
      rightAside={
        <Illustration src={UndrawQuiz} alt="Quizzy" position="bottom-right" />
      }
    >
      <HeroSection
        title="Quizzy"
        subtitle={
          <>
            Play fun little quizzes and test your knowledge about various
            topics. You even can create your{' '}
            <Link href="/new">own custom quizzes</Link> and share them with
            others.
          </>
        }
      />
      <div css={listContainerStyle}>
        <Input
          css={inputStyle}
          prefixIcon={<MdSearch size={24} />}
          placeholder="Search for quiz"
        />
        <QuizList quizzes={quizzes} />
      </div>
    </DefaultLayout>
  )
}

export default Home
