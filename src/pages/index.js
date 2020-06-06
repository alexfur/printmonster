import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import Products from '../components/products'
import Subheading from '../components/subheading'
import Madeby from '../components/madeby'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Heading />
        <Subheading />
        <Products />
        <Madeby />
      </Layout>
    </>
  )
}

export default IndexPage
