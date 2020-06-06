import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

import './styles.scss'

import Navbar from './navbar'
import Madeby from './madeby'

const Layout = ({ children, data }) => (
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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'PrintMonster' },
              {
                name: 'keywords',
                content: 'Illustrations, backgrounds, doodles, landing page',
              },
            ]}
          />

          <main className="Site-content">
            <Navbar />

            <Grid centered stackable relaxed>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <Container>{children}</Container>
              </Grid.Column>
            </Grid>
          </main>

          <footer>
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
