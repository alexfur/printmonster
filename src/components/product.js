import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const Product = ({ productImage }) => (
  <div>
    <Container>
      <Image centered={true} src={productImage} />
    </Container>
  </div>
)

export default Product
