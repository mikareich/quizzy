import media from '@design-system/mediaQueries'
import styled from '@emotion/styled'

const Container = styled.main`
  width: clamp(280px, 80vw, 800px);
  margin: 100px auto 0 auto;

  ${media.lessThan('md')} {
    margin-top: 50px;
  }
`

export default Container
