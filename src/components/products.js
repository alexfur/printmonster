import React from 'react'
import { Grid } from 'semantic-ui-react'
import Product from './product'

function Products(props) {
  return (
    <div>
      <Grid columns={3} padded>
        {props.productImages.map(productImage => {
          return (
            <Grid.Column>
              <Product productImage={productImage} />
            </Grid.Column>
          )
        })}
      </Grid>
    </div>
  )
}

export default Products
