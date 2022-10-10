import { DefaultProps } from '@design-system/propertyUtils'
import styled from '@emotion/styled'

import Button from './Button'

interface QuizButtonProps extends DefaultProps {}

const QuizButton = styled(Button)<QuizButtonProps>`
  background: ${(props) => props.theme?.colors.secondary};
  color: ${(props) => props.theme?.colors.textOnSecondary};
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`

export default QuizButton
