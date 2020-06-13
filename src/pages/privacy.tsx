import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import PrivacyPolicy from 'components/PrivacyPolicy'

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPage
