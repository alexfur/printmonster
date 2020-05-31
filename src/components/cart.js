import React, { useState } from 'react'
import {
  useCart,
  useCheckoutUrl,
  useCartItems,
  useRemoveItemFromCart,
  useCartCount,
  useUpdateItemQuantity,
} from 'gatsby-theme-shopify-manager'

import {
  Button,
  Label,
  Image,
  Menu,
  Segment,
  Item,
  Icon,
  Divider,
} from 'semantic-ui-react'

function Cart() {
  const cart = useCart()
  const cartItems = useCartItems()
  const removeItemFromCart = useRemoveItemFromCart()
  const cartCount = useCartCount()
  const checkoutUrl = useCheckoutUrl()

  const [openCartMenu, setOpenCartMenu] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [item] = useCartItems()
  const updateItemQuantity = useUpdateItemQuantity()

  const updateQuantityRemoveOneItem = async item => {
    if (item == null) {
      return
    }

    const variantId = item.variant.id
    const newQuantity = item.quantity - 1

    try {
      await updateItemQuantity(variantId, newQuantity)
      alert('Successfully updated the item quantity!')
    } catch {
      alert("There was a problem updating that item's quantity.")
    }
  }

  const checkoutButton =
    checkoutUrl === null ? (
      <p>Nothing to checkout</p>
    ) : (
      <p>
        <Button color="twitter">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Checkout
          </a>
        </Button>
      </p>
    )

  const checkoutModal = (
    <div style={{ textAlign: 'right' }}>
      <Button
        onClick={() => {
          setOpenCartMenu(openCartMenu !== true)
        }}
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

      {openCartMenu ? (
        <Menu
          size="large"
          vertical
          style={{ marginTop: '-30px', overflow: 'auto', maxHeight: '500px' }}
        >
          <div>
            <Icon
              onClick={() => {
                setOpenCartMenu(false)
              }}
              name="close"
              style={{ padding: '2rem', cursor: 'pointer' }}
            />
          </div>
          <Menu.Header>
            <Segment
              basic
              style={{
                textAlign: 'center',
                marginBottom: '-20px',
                marginTop: '-20px',
              }}
            >
              <span>
                <h2>Your Cart</h2>
              </span>
            </Segment>
          </Menu.Header>
          {console.log(JSON.stringify(cartItems))}
          {cartItems.map(product => {
            return (
              <Item>
                <Divider />
                <Item.Content>
                  <Segment basic>
                    <span style={{ float: 'left', fontWeight: 600 }}>
                      {product.title} (x{product.quantity})
                    </span>
                    <span style={{ float: 'right' }}>
                      $
                      {Math.round(
                        product.quantity * product.variant.priceV2.amount
                      )}
                    </span>
                    <br />
                    <br />
                    <span style={{ float: 'left' }}>
                      <button
                        style={{
                          background: 'none',
                          float: 'left',
                          marginLeft: '-6px',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'grey',
                        }}
                        onClick={() => {
                          updateQuantityRemoveOneItem(product)
                        }}
                      >
                        Remove
                      </button>
                    </span>
                  </Segment>
                </Item.Content>
              </Item>
            )
          })}
          <Item>
            <Item.Content>
              <Divider />
              <Segment basic>
                <span style={{ float: 'left', fontWeight: 600 }}>Subtotal</span>
                <span style={{ float: 'right' }}>${cart.totalPrice} </span>
              </Segment>
            </Item.Content>
          </Item>
          <Menu.Item>
            <Segment basic style={{ textAlign: 'center' }}>
              {checkoutButton}
            </Segment>
          </Menu.Item>
        </Menu>
      ) : (
        ''
      )}
    </div>
  )

  return <>{checkoutModal}</>
}

export default Cart
