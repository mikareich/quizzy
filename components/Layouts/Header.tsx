import styled from '@emotion/styled'
import media from '../../utils/design-system/mediaQueries'

const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;

  ${media('md')} {
    margin-bottom: 60px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`

export default Header
