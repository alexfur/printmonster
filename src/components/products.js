import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import Product from './product'
import BuyAll from './buyall'

function Products() {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title], order: ASC }) {
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
    <div>
      {/*Return buy button for the 'All patterns' product*/}
      <BuyAll
        allPatternsItem={data.allShopifyProduct.nodes.filter(
          product => product.title === 'All patterns'
        )}
      />
      {/*Return product grid of all products except the 'All patterns' product*/}
      <Grid columns={3} stackable={true} padded>
        {data.allShopifyProduct.nodes.map(product => {
          return product.title !== 'All patterns' ? (
            <Grid.Column key={product.variants[0].shopifyId}>
              <Product
                title={product.title}
                image={product.variants[0].image.originalSrc}
                price={product.variants[0].priceV2.amount}
                productId={product.variants[0].shopifyId}
              />
            </Grid.Column>
          ) : (
            ''
          )
        })}
      </Grid>
    </div>
  )
}

export default Products
