import React from 'react'
import { Button, Container, Image } from 'semantic-ui-react'
import { useAddItemToCart } from 'gatsby-theme-shopify-manager'

const Product = ({ image, price, productId }) => {
  console.log(productId)

  const addItemToCart = useAddItemToCart()

  async function addToCart() {
    const variantId = productId
    const quantity = 1

    try {
      await addItemToCart(variantId, quantity)
      alert('Successfully added that item to your cart!')
    } catch {
      alert('There was a problem adding that item to your cart.')
    }
  }

  return (
    <div>
      <Container>
        <Image centered={true} src={image} />
        <p>{price}</p>
        <Button onClick={addToCart}>Add item to your cart</Button>
      </Container>
    </div>
  )
}

export default Product
