import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const Product = ({ image, price }) => (
  <div>
    <Container>
      <Image centered={true} src={image} />
      <p>{price}</p>
    </Container>
  </div>
)

export default Product
