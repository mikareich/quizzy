import { css } from '@emotion/react'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import ArrowForward from '@mui/icons-material/ArrowForward'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
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
      title="Quizzy | Register"
      description=""
      illustration={<Image src={UndrawLogin} />}
    >
      <Header>
        <Title css={{ margin: '0px' }}>Register</Title>
      </Header>
      <Subtitle as={Heading5}>
        Register to create your own quizzes. If you already have an account, you
        can login <Link href="/login">here</Link>.
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
        <label htmlFor="email">
          <Text>Enter your email</Text>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            prefixIcon={<EmailOutlined width={24} />}
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
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
