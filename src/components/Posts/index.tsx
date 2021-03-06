import Container from 'components/UI/Container'
import TitleSection from 'components/UI/TitleSection'
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { ImageSharpFluid, SectionTitle } from 'helpers/definitions'
import React from 'react'

import * as Styled from './styles'

interface Post {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      description: string
      date: string
      tags: string[]
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid
        }
      }
    }
  }
}

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { category: { eq: "blog" }, published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sectionTitle: SectionTitle = markdownRemark.frontmatter
  const posts: Post[] = allMarkdownRemark.edges

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} center />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags },
          } = item.node

          return (
            <Styled.Post key={id}>
              <Link to={slug}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
          )
        })}
      </Styled.Posts>
    </Container>
  )
}

export default Posts
