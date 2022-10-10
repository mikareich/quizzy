import media from '@design-system/mediaQueries'
import styled from '@emotion/styled'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.border};
  padding: 40px;

  ${media.lessThan('md')} {
    padding: 20px;
  }
`

export default Card
