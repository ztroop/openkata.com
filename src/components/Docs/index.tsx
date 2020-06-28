import SideBar from 'components/SideBar'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface DocSegment {
  id: string
  frontmatter: {
    title: string
  }
  body: any
}

interface Node {
  node: DocSegment
}

const Docs: React.FC = () => {
  const [state, setState] = useState('')

  const mdx = useStaticQuery(graphql`
    query MyQuery {
      allMdx(filter: { frontmatter: { category: { eq: "docs" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            body
          }
        }
      }
    }
  `)
  const docItems: DocSegment[] = mdx.allMdx.edges
    .filter((i: Node) => i.node)
    .map((i: Node) => i.node)

  return (
    <SideBar
      menuTitle="DOCUMENTATION"
      menuItems={docItems}
      currentItem={setState}
    >
      {docItems.map((i: DocSegment) => {
        if (state === i.id) return <MDXRenderer>{i.body}</MDXRenderer>
        return ''
      })}
    </SideBar>
  )
}

export default Docs
