import * as React from 'react'
import Link from 'gatsby-link'
import { Container, Grid, List } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const Header = () => (
  <div>
    <br></br>
    <Container textAlign="left">
      <Grid>
        <Grid.Column width={14}>
          <Link to="/">
            <img src={'/img/logo.svg'} height="35%" width="35%" alt="Logo" />
          </Link>
        </Grid.Column>
        <Grid.Column width={2}>
          <List horizontal>
            <List.Item>
              <Link to="/">home</Link>
            </List.Item>
            <List.Item>
              <Link to="/blog">blog</Link>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
)

const DefaultLayout = () => (
  <div>
    <Header />
  </div>
)

export default DefaultLayout
