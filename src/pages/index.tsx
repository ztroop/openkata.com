import * as React from 'react'
import { Container, Grid } from 'semantic-ui-react'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Column width={8} verticalAlign='middle'>
              <h1>
                Empower Educators & Learners
              </h1>
              <h2>
                An education platform that just works. Cost-effective, fast and open-source.
              </h2>
            </Grid.Column>
            <Grid.Column width={8}>          
              <img src={'/img/splash.svg'} height="100%" width="100%" alt="Logo" />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
