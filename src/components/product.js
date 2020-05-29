import React, { useState } from 'react'
import { Button, Container, Image } from 'semantic-ui-react'
import { useAddItemToCart, useCartItems } from 'gatsby-theme-shopify-manager'

const Product = ({ image, price, productId }) => {
  const addItemToCart = useAddItemToCart()
  const cartItems = useCartItems()

  async function addToCart() {
    const variantId = productId
    const quantity = 1
    let alreadyInCart = false

    cartItems.forEach(product => {
      if (product.variant.id === variantId) {
        alreadyInCart = true
      }
    })

    if (!alreadyInCart) {
      try {
        await addItemToCart(variantId, quantity)
        alert('Successfully added that item to your cart!')
      } catch {
        alert('There was a problem adding that item to your cart.')
      }
    } else {
      alert('Product already in cart!')
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
