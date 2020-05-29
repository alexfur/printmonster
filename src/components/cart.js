import React from 'react'
import {
  useCheckoutUrl,
  useCartItems,
  useRemoveItemFromCart,
  useCartCount,
} from 'gatsby-theme-shopify-manager'

import { Modal, Button, Header, Label, Image, Segment } from 'semantic-ui-react'

function Cart() {
  const cartItems = useCartItems()
  const removeItemFromCart = useRemoveItemFromCart()
  const cartCount = useCartCount()
  const checkoutUrl = useCheckoutUrl()

  const checkoutButton =
    checkoutUrl === null ? (
      <p>Nothing to checkout</p>
    ) : (
      <p>
        <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
          Continue to checkout
        </a>
      </p>
    )

  const checkoutModal = (
    <Modal
      trigger={
        <Button
          style={{
            background: 'none',
          }}
        >
          <div>
            <Image src={require('./../assets/cart.svg')} />
            <Label
              color="red"
              circular
              style={{
                transform: 'translate(15px, -30px)',
              }}
            >
              {cartCount}
            </Label>
          </div>
        </Button>
      }
    >
      <Modal.Header>Your cart</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>There are currently {cartCount} items in your cart.</Header>
          {checkoutButton}
          <ul>
            {cartItems.map(product => {
              return (
                <>
                  <li key={product.title}>{product.title}</li>
                  <Button
                    onClick={() => {
                      removeItemFromCart(product.variant.id)
                    }}
                  >
                    Remove item
                  </Button>
                </>
              )
            })}
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

  return <>{checkoutModal}</>
}

export default Cart
