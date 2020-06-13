import Container from 'components/UI/Container'
import TitleSection from 'components/UI/TitleSection'
import React from 'react'

import * as Styled from './styles'

interface Props {
  title: string
  content: React.ReactNode
}

const Banner: React.FC<Props> = ({ title, content }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} />
      <Styled.Content>{content}</Styled.Content>
    </Container>
  </Styled.Banner>
)

export default Banner
