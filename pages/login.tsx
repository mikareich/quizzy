import { css } from '@emotion/react'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Key from '@mui/icons-material/Key'
import Visibility from '@mui/icons-material/Visibility'
import Image from 'next/image'
import React from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import Header from '../components/Layouts/Header'
import { Heading5, Link, Subtitle, Text, Title } from '../components/Typography'
import UndrawLogin from '../public/undraw_login.svg'

const formStyles = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function Login() {
  return (
    <DefaultLayout
      title="Quizzy | Login"
      description=""
      illustration={<Image src={UndrawLogin} />}
    >
      <Header>
        <Title css={{ margin: '0px' }}>Login</Title>
      </Header>
      <Subtitle as={Heading5}>
        Sign up to create your own quizzes. If you don't have an account yet,
        you can register <Link href="/">here</Link>.
      </Subtitle>
      <form css={formStyles}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="username">
          <Text>Enter your username</Text>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            prefixIcon={<AccountCircleOutlined width={24} />}
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">
          <Text>Enter your password</Text>
          <Input
            prefixIcon={<Key width={24} />}
            suffixIcon={<Visibility width={24} />}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />
        </label>
        <Button css={{ width: 'min-content' }} type="submit">
          Login
          <ArrowForward width={24} />
        </Button>
      </form>
    </DefaultLayout>
  )
}

export default Login
