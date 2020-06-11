import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Container from 'components/UI/Container'
import TitleSection from 'components/UI/TitleSection'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container section>
      <TitleSection title="404" center />
      <p className="mt-4 text-center w-full">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
