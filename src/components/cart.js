import React, { useState } from 'react'
import {
  useCart,
  useCheckoutUrl,
  useCartItems,
  useRemoveItemFromCart,
  useCartCount,
} from 'gatsby-theme-shopify-manager'

import styled from 'styled-components'

import {
  Modal,
  Button,
  Header,
  Label,
  Image,
  Menu,
  Segment,
  Container,
  Item,
  Grid,
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
            Continue to checkout
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
        <Menu size="large" vertical>
          <div>
            <Icon
              onClick={() => {
                setOpenCartMenu(false)
              }}
              corner="top right"
              name="close"
              style={{ padding: '2rem', cursor: 'pointer' }}
            />
          </div>
          <Menu.Header>
            <Segment basic style={{ textAlign: 'center' }}>
              <span>
                <h2>Your Cart</h2>
              </span>
            </Segment>
          </Menu.Header>
          {cartItems.map(product => {
            return (
              <Item>
                <Divider />
                <Item.Content>
                  <Segment basic>
                    <span style={{ float: 'left' }}>{product.title}</span>
                    <span style={{ float: 'right' }}>
                      ${Math.round(product.variant.priceV2.amount)}
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
                          removeItemFromCart(product.variant.id)
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

    // <Modal
    //   trigger={
    //     <Button
    //       style={{
    //         background: 'none',
    //       }}
    //     >
    //       <div>
    //         <Image src={require('./../assets/cart.svg')} />
    //         <Label
    //           color="red"
    //           circular
    //           style={{
    //             transform: 'translate(15px, -30px)',
    //           }}
    //         >
    //           {cartCount}
    //         </Label>
    //       </div>
    //     </Button>
    //   }
    // >
    //   <Modal.Header>Your cart</Modal.Header>
    //   <Modal.Content>
    //     <Modal.Description>
    //       <Header>There are currently {cartCount} items in your cart.</Header>
    //       {checkoutButton}
    //       <ul>
    //         {cartItems.map(product => {
    //           return (
    //             <>
    //               <li key={product.title}>{product.title}</li>
    //               <Button
    //                 onClick={() => {
    //                   removeItemFromCart(product.variant.id)
    //                 }}
    //               >
    //                 Remove item
    //               </Button>
    //             </>
    //           )
    //         })}
    //       </ul>
    //     </Modal.Description>
    //   </Modal.Content>
    // </Modal>
  )

  return <>{checkoutModal}</>
}

export default Cart
