import Container from 'components/UI/Container'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { ImageSharpFluid } from 'helpers/definitions'
import React from 'react'

import * as Styled from './styles'

const HeroBanner: React.FC = () => {
    const { placeholderImage } = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "splash.png" }) {
                childImageSharp {
                    fluid(maxWidth: 450) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid

    return (
        <Container section>
            <Styled.Hero>
                <Styled.HeroSection>
                    <Styled.WowText>Empower Education</Styled.WowText>
                    <Styled.WowSubText>
                        Improving IT Learning Environments
                    </Styled.WowSubText>
                </Styled.HeroSection>
                <Styled.HeroSection>
                    <Styled.WowImg>
                        <Img fluid={logoImage} />
                    </Styled.WowImg>
                </Styled.HeroSection>
            </Styled.Hero>
        </Container>
    )
}

export default HeroBanner
