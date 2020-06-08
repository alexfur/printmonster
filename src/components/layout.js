import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

import './styles.scss'

import Navbar from './navbar'
import Madeby from './madeby'
import SEO from './seo'
import Licence from './licence'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="Site">
          <main className="Site-content">
            <SEO />
            <Navbar />

            <Grid centered stackable relaxed>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <Container>{children}</Container>
              </Grid.Column>
            </Grid>
          </main>

          <footer style={{ paddingBottom: '1rem', paddingTop: '3rem' }}>
            <Licence />
            <Madeby />
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
