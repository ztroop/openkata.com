import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Container from 'components/UI/Container'
import TitleSection from 'components/UI/TitleSection'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import FormatHtml from 'utils/FormatHtml'

import * as Styled from './styles'

interface Post {
    html: React.ReactNode
    fields: {
        slug: string
    }
    frontmatter: {
        title: string
        date: string
    }
}

interface Props {
    data: {
        markdownRemark: Post
    }
    pageContext: {
        slug: string
        next: Post
        previous: Post
    }
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { previous, next } = pageContext

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Container section>
                <TitleSection title={post.frontmatter.date} />
                <FormatHtml content={post.html} />
                <Styled.Links>
                    <span>
                        {previous && (
                            <Link to={previous.fields.slug} rel="previous">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </span>
                    <span>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </span>
                </Styled.Links>
            </Container>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
            }
        }
    }
`
