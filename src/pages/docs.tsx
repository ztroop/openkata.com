import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Docs from 'components/Docs'

const DocsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Docs" />
      <Docs />
    </Layout>
  )
}

export default DocsPage
