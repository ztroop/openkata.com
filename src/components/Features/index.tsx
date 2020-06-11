import Container from 'components/UI/Container'
import { IconProps } from 'components/UI/Icon'
import InfoBlock from 'components/UI/InfoBlock'
import TitleSection from 'components/UI/TitleSection'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionTitle } from 'helpers/definitions'
import React from 'react'

import * as Styled from './styles'

interface Feature {
    node: {
        id: string
        frontmatter: {
            title: string
            icon: IconProps
            description: string
        }
    }
}

const Features: React.FC = () => {
    const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
        query {
            markdownRemark(
                frontmatter: { category: { eq: "features section" } }
            ) {
                frontmatter {
                    title
                }
            }
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "features" } } }
                sort: { fields: fileAbsolutePath }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            icon
                            description
                        }
                    }
                }
            }
        }
    `)

    const sectionTitle: SectionTitle = markdownRemark.frontmatter
    const features: Feature[] = allMarkdownRemark.edges

    return (
        <Container>
            <TitleSection title={sectionTitle.title} center />
            <Styled.Features>
                {features.map((item) => {
                    const {
                        id,
                        frontmatter: { title, icon, description },
                    } = item.node

                    return (
                        <Styled.FeatureItem key={id}>
                            <InfoBlock
                                icon={icon}
                                title={title}
                                content={description}
                            />
                        </Styled.FeatureItem>
                    )
                })}
            </Styled.Features>
        </Container>
    )
}

export default Features
