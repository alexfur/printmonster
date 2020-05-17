import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import Product from './product'
import JSONPretty from 'react-json-pretty'

function Products(props) {
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
          }
          availableForSale
          images {
            localFile {
              url
            }
          }
          id
        }
      }
    }
  `)

  console.log(JSON.stringify(data.allShopifyProduct.nodes))

  return (
    <div>
      <Grid columns={3} stackable={true} padded>
        {data.allShopifyProduct.nodes.map(product => {
          return (
            <Grid.Column>
              <Product productImage={product.images[0].localFile.url} />
            </Grid.Column>
          )
        })}

        <div>
          <JSONPretty id="json-pretty" data={data.allShopifyProduct.nodes} />
        </div>
      </Grid>
    </div>
  )
}

export default Products
