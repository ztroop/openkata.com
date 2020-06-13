import Container from 'components/UI/Container'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SectionTitle } from 'helpers/definitions'
import React from 'react'

import { MDXProvider } from '@mdx-js/react'

interface PrivacyMdx extends SectionTitle {
  frontmatter: {
    title: string
  }
  body: string
}

const PrivacyPolicy: React.FC = () => {
  const shortcodes = { Link }
  const results = useStaticQuery(graphql`
    {
      mdx(frontmatter: { category: { eq: "privacy section" } }) {
        body
        frontmatter {
          title
        }
      }
    }
  `)
  const mdx: PrivacyMdx = results.mdx

  return (
    <Container section>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default PrivacyPolicy
