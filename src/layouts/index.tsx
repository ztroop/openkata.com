import * as React from 'react'
import Link from 'gatsby-link'
import { Menu, Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './openkata.scss'

const DefaultLayout = () => (
  <div>
    <br></br>
    <Container>
      <Menu secondary>
        <img
          id="pix"
          src={'/img/logo.svg'}
          height="20%"
          width="20%"
          alt="Logo"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/">home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/blog">blog</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/docs">docs</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
)

export default DefaultLayout
