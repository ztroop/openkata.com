import * as React from 'react'
import { Container, Grid, List } from 'semantic-ui-react'
import DefaultLayout from '../layouts'

import '../layouts/openkata.scss'

const Splash = () => {
  return (
    <div>
      <Container>
        <div className="splash">
          <Grid>
            <Grid.Column width={8} verticalAlign="middle">
              <h1>Empower Educators and Learners</h1>
              <h3>A cost-effective, fast and open-source platform.</h3>
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
        </div>
      </Container>
    </div>
  )
}

const FeatureBar = () => {
  return (
    <div>
      <Container fluid>
        <div className="why">
          <Container>
            <Grid centered>
              <Grid.Column width={5}>
                <div className="why-blocks">
                  <div className="why-blocks-content">
                    <img src="img/124126.svg" width="75%" />
                    <h1>Cost Saving</h1>
                    <h4>Affordable pricing options for a hosted solution</h4>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="why-blocks">
                  <div className="why-blocks-content">
                    <img src="img/124122.svg" width="75%" />
                    <h1>Flexibility</h1>
                    <h4>Configurable lab environment options and tuning</h4>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="why-blocks">
                  <div className="why-blocks-content">
                    <img src="img/124094.svg" width="75%" />
                    <h1>Easy to Use</h1>
                    <h4>Easy to deploy classroom environments and resources</h4>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <Container fluid>
        <div className="footer">
          <Container>
            <Grid>
              <Grid.Column width={5}>
                <div className="footer-blocks">
                  <h4>Links</h4>
                  <List>
                    <List.Item>
                      <img src="img/github.svg" height="15px" width="15px" />
                      <a href="https://github.com/openkata">GitHub</a>
                    </List.Item>
                    <List.Item>
                      <img src="img/discord.svg" height="15px" width="15px" />
                      <a href="https://discord.gg/vCpbAbx">Discord</a>
                    </List.Item>
                  </List>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="footer-blocks">
                  <h4>Resources</h4>
                  <List>
                    <List.Item>
                      <img src="img/github.svg" height="15px" width="15px" />
                      <a href="https://github.com/openkata/platform">
                        Platform
                      </a>
                    </List.Item>
                    <List.Item>
                      <img src="img/book.svg" height="15px" />
                      <a href="#">Documentation</a>
                    </List.Item>
                  </List>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="footer-blocks">
                  <h4>© 2020 Openkata</h4>
                  <List>
                    <List.Item>
                      <a href="#">Privacy & Terms of Use</a>
                    </List.Item>
                  </List>
                </div>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <DefaultLayout />
      <Splash />
      <FeatureBar />
      <Footer />
    </div>
  )
}

export default HomePage
