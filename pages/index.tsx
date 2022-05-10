import React from 'react'
import StatusBar from '../components/StatusBar'
import { Heading4, Link, Text, Title } from '../components/Typography'

function Home() {
  return (
    <>
      <StatusBar />
      <main css={{ width: '80vw', margin: 'auto' }}>
        <Title>Quizzy</Title>
        <Heading4 css={(theme) => ({ color: theme.colors.textLight })}>
          Play fun little quizzes and test your knowledge about various topics.
          You even can create your <Link href="/new">own custom quizzes</Link>{' '}
          and share them with others.
        </Heading4>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptate, voluptates sit deserunt eligendi asperiores rerum obcaecati
          accusantium dolor numquam expedita! Sit hic similique reprehenderit id
          animi neque minima cumque.
        </Text>
      </main>
    </>
  )
}

export default Home
