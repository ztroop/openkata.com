import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Grid, List } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css"

const Header = () => (
  <div>
    <br></br>
    <Container textAlign='left'>
      <Grid>
        <Grid.Column width={12}>
          <Link to="/"><img src={'/img/logo.svg'} height="35%" width="35%" alt="Logo" /></Link>
        </Grid.Column>
        <Grid.Column width={4}>
          <List horizontal>
            <List.Item><Link to="/">home</Link></List.Item>
            <List.Item><Link to="/blog">blog</Link></List.Item>
          </List>
        </Grid.Column>
      </Grid> 
    </Container>
  </div>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Openkata - Empowering Educators & Learners"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
