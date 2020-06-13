import React from 'react'

import Logo from './Logo'
import MainNav from './MainNav'
import * as Styled from './styles'

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = () => (
  <Styled.Header>
    <Styled.Wrapper>
      <Logo />
      <MainNav />
    </Styled.Wrapper>
  </Styled.Header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
