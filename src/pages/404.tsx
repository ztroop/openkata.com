import * as React from 'react'
import DefaultLayout from '../layouts'

import '../layouts/openkata.scss'
import { Container } from 'semantic-ui-react'

const NotFoundPage = () => (
  <div>
    <DefaultLayout />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </div>
)

export default NotFoundPage
