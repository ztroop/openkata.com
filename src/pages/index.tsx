import * as React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import DefaultLayout from '../layouts'

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
        <DefaultLayout />
        <Container>
          <Grid>
            <Grid.Column width={8} verticalAlign="middle">
              <h1>Empower Educators and Learners</h1>
              <h3>
                You need an education platform that just works. Cost-effective,
                fast and open-source.
              </h3>
            </Grid.Column>
            <Grid.Column width={8}>
              <img
                src={'/img/splash.svg'}
                height="100%"
                width="100%"
                alt="Logo"
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
