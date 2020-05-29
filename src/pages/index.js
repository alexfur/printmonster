import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import Products from '../components/products'
import Cart from '../components/cart'

import { Responsive } from 'semantic-ui-react'

const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 }

const IndexPage = () => (
  <>
    {/* Desktop version: cart must be outside of layout.
        Mobile version: cart must be inside layout.   */}
    <Responsive {...notMobile}>
      <Cart />
      <Layout>
        <Heading />
        <Products />
      </Layout>
    </Responsive>
    <Responsive {...Responsive.onlyMobile}>
      <Layout>
        <Cart />
        <Heading />
        <Products />
      </Layout>
    </Responsive>
  </>
)

export default IndexPage
