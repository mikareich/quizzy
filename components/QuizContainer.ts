import media from '@design-system/mediaQueries'
import {
  DefaultProps,
  propertyEquals,
  propertyNotDefined,
} from '@design-system/propertyUtils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const QuizContainer = styled.div`
  display: grid;
  grid-template:
    'navBar' auto
    'header' auto
    'body' 1fr
    'footer' auto / 1fr;
  row-gap: 20px;
  height: 90vh;
  padding-bottom: 30px;

  height: 100%;
  ${media.lessThan('sm')} {
    padding-bottom: 20px;
  }
`

interface QuizBarProps {
  align?: 'left' | 'right' | 'between' | 'center'
}

const leftAlign = css`
  justify-content: flex-start;
`
const rightAlign = css`
  justify-content: flex-end;
`
const betweenAlign = css`
  justify-content: space-between;
`
const centerAlign = css`
  justify-content: center;
`

const QuizBar = styled.div<QuizBarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${propertyEquals('align', 'left', () => leftAlign)}
  ${propertyEquals('align', 'right', () => rightAlign)}
  ${propertyEquals('align', 'between', () => betweenAlign)}
  ${propertyEquals('align', 'center', () => centerAlign)}
`

export const QuizNavBar = styled(QuizBar)`
  grid-area: navBar;
`

export const QuizFooter = styled(QuizBar)`
  grid-area: footer;
`

export const QuizHeader = styled.header`
  grid-area: header;
`

interface QuizBodyProps extends DefaultProps {
  layout?: 'centered' | 'full' | '4x4'
}

const centeredLayout = css`
  place-items: center;
`

const listLayout = css`
  place-items: stretch;
`

const fourByFourLayout = css`
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

export const QuizBody = styled.div<QuizBodyProps>`
  grid-area: body;
  display: grid;
  padding: 20px;
  gap: 20px;

  ${propertyNotDefined('layout', () => centeredLayout)}
  ${propertyEquals('layout', 'centered', () => centeredLayout)}
  ${propertyEquals('layout', 'full', () => listLayout)}
  
  ${media.greaterThan('md')} {
    ${propertyEquals('layout', '4x4', () => fourByFourLayout)}
  }
`

export default QuizContainer
