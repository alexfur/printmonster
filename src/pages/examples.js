import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import BuyAll from '../components/buyall'

const ExamplesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "examples" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 3080, quality: 1) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allShopifyProduct(sort: { fields: [createdAt], order: ASC }) {
        nodes {
          title
          variants {
            image {
              id
              originalSrc
            }
            priceV2 {
              amount
              currencyCode
            }
            shopifyId
          }
          availableForSale
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Segment basic>
          <Link to={'/'}>
            <Heading />
          </Link>
        </Segment>
        <Segment basic>
          {' '}
          <Header as={'h1'} textAlign={'center'}>
            Some patterns in use to get you inspired...
          </Header>
        </Segment>
        <Segment basic>
          <BuyAll
            allPatternsItem={data.allShopifyProduct.nodes.filter(
              product => product.title.toLowerCase() === 'all patterns'
            )}
          />
        </Segment>
        <Segment basic>
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </Segment>{' '}
        <Segment basic>
          <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </Segment>
        <Segment basic>
          <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
        </Segment>{' '}
        <Segment basic>
          <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
        </Segment>
      </Layout>
    </>
  )
}

export default ExamplesPage
