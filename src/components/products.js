import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import Product from './product'
import JSONPretty from 'react-json-pretty'

function Products() {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
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
            title
            shopifyId
          }
          availableForSale
        }
      }
    }
  `)

  return (
    <div>
      <Grid columns={3} stackable={true} padded>
        {data.allShopifyProduct.nodes.map(product => {
          return (
            <Grid.Column>
              <Product
                image={product.variants[0].image.originalSrc}
                price={product.variants[0].priceV2.amount}
                productId={product.variants[0].shopifyId}
              />
            </Grid.Column>
          )
        })}
      </Grid>
    </div>
  )
}

export default Products
