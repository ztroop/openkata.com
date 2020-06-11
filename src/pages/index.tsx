import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroBanner from 'components/HeroBanner'
import Services from 'components/Features'

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="About" />
            <HeroBanner />
            <Services />
        </Layout>
    )
}

export default IndexPage
