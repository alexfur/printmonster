import React, { useState } from 'react'
import {
  Button,
  Container,
  Image,
  Modal,
  Header,
  Segment,
  Label,
} from 'semantic-ui-react'
import { useAddItemToCart, useCartItems } from 'gatsby-theme-shopify-manager'

const Product = ({ title, image, price, productId }) => {
  const addItemToCart = useAddItemToCart()
  const cartItems = useCartItems()

  const [openProductModal, setOpenProductModal] = useState(false)

  const productModal = (
    <Modal
      size="small"
      centered
      open={openProductModal}
      onClose={() => {
        setOpenProductModal(false)
      }}
    >
      <Modal.Content>
        <Image
          src={image}
          centered
          wrapped
          size="large"
          style={{ border: '2px solid black' }}
          label={
            <Label color="red" ribbon="right" size="big">
              ${Math.round(price)}
            </Label>
          }
        />
        <Modal.Description>
          <Segment basic style={{ padding: '5rem' }}>
            <span style={{ float: 'left' }}>
              <Header as="h1" textAlign="center">
                {title}
              </Header>
              <p style={{ fontSize: '1.2rem' }}>
                Includes <span style={{ fontWeight: 600 }}>FIG</span> and{' '}
                <span style={{ fontWeight: 600 }}>SVG</span> copies.
              </p>
            </span>
            <span style={{ float: 'right' }}>
              <Header
                as="h1"
                textAlign="center"
                onClick={addToCart}
                style={{ cursor: 'pointer' }}
              >
                Add to cart
              </Header>
              <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                Size: 800KB
              </p>
            </span>
          </Segment>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

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
    <div style={{ position: 'relative' }}>
      <Segment basic>
        <div
          style={{
            height: '2rem',
            backgroundColor: 'white',
            border: '2px solid black',
            borderBottom: 0,
          }}
        >
          <Header as="h3" style={{ padding: '0.3rem' }}>
            {title}
          </Header>
        </div>
        <Image
          style={{
            backgroundColor: 'white',
            border: '2px solid black',
            cursor: 'pointer',
          }}
          onClick={() => {
            setOpenProductModal(true)
          }}
          centered={true}
          src={image}
        />
      </Segment>
      {productModal}
    </div>
  )
}

export default Product
