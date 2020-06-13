import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

type Meta =
  | {
      name: string
      content: string
    }
  | {
      property: string
      content: string
    }

interface Props {
  description?: string
  lang?: string
  meta?: Meta[]
  title: string
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta!)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``,
}

export default SEO
