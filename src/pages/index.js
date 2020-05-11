import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import Products from '../components/products'

const IndexPage = () => (
  <Layout>
    <Heading />
    <Products
      productImages={[
        require('./../assets/product.png'),
        require('./../assets/product.png'),
        require('./../assets/product.png'),
        require('./../assets/product.png'),
      ]}
    />
  </Layout>
)

export default IndexPage
