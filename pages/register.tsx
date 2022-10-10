import Button from '@components/Button'
import HeroSection from '@components/HeroSection'
import Illustration from '@components/Illustration'
import Input from '@components/Input'
import Link from '@components/Link'
import LoginCard from '@components/LoginCard'
import { Text } from '@components/Typography'
import { css } from '@emotion/react'
import CenteredLayout from '@layouts/CenteredLayout'
import UndrawTerms from '@public/undraw_terms.svg'
import React from 'react'
import {
  MdArrowForward,
  MdOutlineAccountCircle,
  MdVpnKey,
} from 'react-icons/md'

const formStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  label > div {
    width: 100%;
  }
`

function Register() {
  return (
    <CenteredLayout
      title="Quizzy | Register"
      description=""
      progressBar={false}
      rightAside={
        <Illustration
          src={UndrawTerms}
          alt="Register"
          position="bottom-right"
        />
      }
    >
      <LoginCard>
        <HeroSection
          title="Register"
          subtitle={
            <>
              Register to create your own quizzes. If you already have an
              account, you can login <Link href="/login">here</Link>.
            </>
          }
        />
        <form css={formStyles}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="username">
            <Text>Enter your username</Text>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              prefixIcon={<MdOutlineAccountCircle size={24} />}
            />
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">
            <Text>Enter your password</Text>
            <Input
              prefixIcon={<MdVpnKey size={24} />}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            />
          </label>
          <Button
            css={{ width: 'min-content' }}
            type="submit"
            suffixIcon={<MdArrowForward />}
          >
            Create account
          </Button>
        </form>
      </LoginCard>
    </CenteredLayout>
  )
}

export default Register
