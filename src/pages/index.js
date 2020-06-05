import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import Products from '../components/products'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Heading />
        <Products />
      </Layout>
    </>
  )
}

export default IndexPage
