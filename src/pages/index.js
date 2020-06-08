import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import Products from '../components/products'
import Subheading from '../components/subheading'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Link to={'/'}>
          <Heading />
        </Link>
        <Subheading />
        <Products />
      </Layout>
    </>
  )
}

export default IndexPage
