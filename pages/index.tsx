import { css, useTheme } from '@emotion/react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Search from '@mui/icons-material/Search'
import Image from 'next/image'
import React from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import Header from '../components/Layouts/Header'
import { Heading5, Link, Subtitle, Text, Title } from '../components/Typography'
import UndrawQuiz from '../public/undraw_quiz.svg'
import media from '../utils/design-system/mediaQueries'

const listContainerStyle = css`
  margin-top: 75px;
  display: grid;
  justify-items: end;
  gap: 20px;
`

const inputStyle = css`
  width: 100%;

  ${media('md')} {
    width: auto;
  }
`

const responsiveText = css`
  display: none;
  ${media('md')} {
    display: block;
  }
`

const quizListStyle = css`
  margin-top: 20px;
  width: 100%;
  list-style: none;
  padding: 0;
`

const quizItemStyle = css`
  margin-bottom: 30px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 3fr auto;
  gap: 10px;

  ${media('md')} {
    grid-template-columns: 1fr 3fr 1fr auto;
  }

  ${Text} {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const quizzes = [
  {
    id: '123',
    title: '️🇺🇦 Länderflaggen',
    description:
      'Wie gut kennst du dich mit unseren Länderflagge auf der Welt aus?',
    totalNumberOfQuestions: 20,
  },
  {
    id: '456',
    title: 'Anime',
    description: 'Junge Spaß imagine ich packe hier Anime rein tf...',
    totalNumberOfQuestions: 11,
  },
  {
    id: '789',
    title: 'JavaScript',
    description: 'Bist du ein echter JS OG? Teste dich in diesem Quiz',
    totalNumberOfQuestions: 35,
  },
  {
    id: '123',
    title: '️🇺🇦 Länderflaggen',
    description:
      'Wie gut kennst du dich mit unseren Länderflagge auf der Welt aus?',
    totalNumberOfQuestions: 20,
  },
  {
    id: '456',
    title: 'Anime',
    description: 'Junge Spaß imagine ich packe hier Anime rein tf...',
    totalNumberOfQuestions: 11,
  },
  {
    id: '789',
    title: 'JavaScript',
    description: 'Bist du ein echter JS OG? Teste dich in diesem Quiz',
    totalNumberOfQuestions: 35,
  },
]

function Home() {
  const theme = useTheme()
  return (
    <DefaultLayout
      illustration={<Image src={UndrawQuiz} />}
      title="Quizzy | Home"
      description=""
    >
      {/* Header */}
      <Header>
        <Title css={{ margin: '0px' }}>Quizzy</Title>
        <Subtitle as={Text}>
          created by{' '}
          <Link
            color={theme.colors.textLight}
            href="https://github.com/mikareich"
          >
            @mikareich
          </Link>
        </Subtitle>
      </Header>

      {/* Hero Text */}
      <Subtitle as={Heading5}>
        Play fun little quizzes and test your knowledge about various topics.
        You even can create your <Link href="/new">own custom quizzes</Link> and
        share them with others.
      </Subtitle>

      {/* Quiz List */}
      <div css={listContainerStyle}>
        <Input
          css={inputStyle}
          prefixIcon={<Search width={24} />}
          placeholder="Search for quiz"
        />
        <ul css={quizListStyle}>
          {quizzes.map((quiz) => (
            <li key={quiz.id} css={quizItemStyle}>
              <Text css={{ fontWeight: 'bold' }}>{quiz.title}</Text>
              <Text css={responsiveText} color={theme.colors.textLight}>
                {quiz.description}
              </Text>
              <Text css={responsiveText}>
                {quiz.totalNumberOfQuestions} Questions
              </Text>
              <Button>
                Start Quiz <ArrowForwardIcon width={24} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  )
}

export default Home
