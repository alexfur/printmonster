import React, { useState } from 'react'
import {
  useCart,
  useCheckoutUrl,
  useCartItems,
  useCartCount,
  useUpdateItemQuantity,
  useRemoveItemsFromCart,
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

function Cart({}) {
  const cart = useCart()
  const cartItems = useCartItems()
  const removeItemsFromCart = useRemoveItemsFromCart()
  const cartCount = useCartCount()
  const checkoutUrl = useCheckoutUrl()
  const [openCartMenu, setOpenCartMenu] = useState(false)
  const updateItemQuantity = useUpdateItemQuantity()

  const clearCart = async () => {
    if (cartItems.length < 1) {
      return
    }

    const itemIds = cartItems.map(item => {
      return item.variant.id
    })

    try {
      await removeItemsFromCart(itemIds)
    } catch {}
  }

  const updateQuantityRemoveOneItem = async item => {
    if (item == null) {
      return
    }

    const variantId = item.variant.id
    const newQuantity = item.quantity - 1

    try {
      await updateItemQuantity(variantId, newQuantity)
    } catch {}
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
              transform: 'translate(15px, -15px)',
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
          style={{ marginTop: '-0px', overflow: 'auto', maxHeight: '500px' }}
        >
          <Menu.Header>
            <Segment
              basic
              style={{
                textAlign: 'center',
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <Icon
                  onClick={() => {
                    setOpenCartMenu(false)
                  }}
                  name="close"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div>
                <h2>Your Cart</h2>
              </div>
              <Segment basic>
                <Button
                  onClick={() => {
                    clearCart()
                  }}
                >
                  Clear cart
                </Button>
              </Segment>
            </Segment>
          </Menu.Header>
          {cartItems.map(product => {
            return (
              <Item key={product.id}>
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
