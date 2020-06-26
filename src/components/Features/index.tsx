import Container from 'components/UI/Container'
import { IconProps } from 'components/UI/Icon'
import InfoBlock from 'components/UI/InfoBlock'
import TitleSection from 'components/UI/TitleSection'
import React from 'react'

import * as Styled from './styles'

interface FeatureSegment {
  title: string
  icon: IconProps
  description: string
}

const Features: React.FC = () => {
  const features: FeatureSegment[] = [
    {
      title: 'Cost Savings',
      icon: 'lightbulb',
      description: 'Affordable pricing options for a hosted platform.',
    },
    {
      title: 'Flexibility',
      icon: 'draw-polygon',
      description: 'Configurable lab environment options.',
    },
    {
      title: 'Easy to Use',
      icon: 'magic',
      description: 'Easy to deploy classroom environments and resources.',
    },
    {
      title: 'Learning Paths',
      icon: 'laptop-code',
      description:
        'Learning tracks for software development and security topics.',
    },
  ]

  return (
    <Container>
      <TitleSection title="Features" center />
      <Styled.Features>
        {features.map((item) => {
          return (
            <Styled.FeatureItem>
              <InfoBlock
                icon={item.icon}
                title={item.title}
                content={item.description}
              />
            </Styled.FeatureItem>
          )
        })}
      </Styled.Features>
    </Container>
  )
}

export default Features
