import Button from 'components/UI/Button'
import Container from 'components/UI/Container'
import TitleSection from 'components/UI/TitleSection'
import { Link } from 'gatsby'
import React from 'react'

import * as Styled from './styles'

interface Props {
  title: string
  subtitle?: string
  content: React.ReactNode
  linkTo: string
  linkText: string
}

const Banner: React.FC<Props> = ({ title, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} />
      <Styled.Content>{content}</Styled.Content>
    </Container>
  </Styled.Banner>
)

export default Banner
