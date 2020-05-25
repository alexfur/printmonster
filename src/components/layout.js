import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid } from 'semantic-ui-react'

import ContextProvider from './context-provider'

import Navbar from './navbar'

import 'semantic-ui-less/semantic.less'

const Layout = ({ children, data }) => (
  <ContextProvider>
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

          <Navbar siteTitle={data.site.siteMetadata.title} />

          <Container>
            <Grid relaxed stackable centered>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                {children}
              </Grid.Column>
            </Grid>
          </Container>
        </>
      )}
    />
  </ContextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
