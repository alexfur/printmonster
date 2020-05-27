import React from 'react'
import { useCartCount } from 'gatsby-theme-shopify-manager'
import { useCheckoutUrl } from 'gatsby-theme-shopify-manager'

function Cart() {
  const cartCount = useCartCount()
  const checkoutUrl = useCheckoutUrl()

  alert(checkoutUrl)

  const chkUrl = null ? (
    <p>There is no active checkout.</p>
  ) : (
    <p>
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        Complete Your Order →
      </a>
    </p>
  )

  return (
    <>
      <h1>There are currently {cartCount} items in your cart.</h1>
      {checkoutUrl}
      {chkUrl}
    </>
  )
}

export default Cart
