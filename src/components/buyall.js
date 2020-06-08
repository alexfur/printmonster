import React, { useEffect, useState } from 'react'
import { useAddItemToCart, useCartItems } from 'gatsby-theme-shopify-manager'
import { Button, Header, Segment } from 'semantic-ui-react'

const BuyAll = ({ allPatternsItem }) => {
  const cartItems = useCartItems()
  const addItemToCart = useAddItemToCart()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  // This block ensures this product's isAddedToCart state is consistent with side effects
  // (for example if this product is removed from the cart).
  useEffect(() => {
    let added = false
    cartItems.forEach(product => {
      if (product.variant.id === allPatternsItem[0].variants[0].shopifyId) {
        added = true
      }
    })
    if (!added) setIsAddedToCart(false)
  }, [cartItems])

  const addToCart = async () => {
    setIsAddingToCart(true)

    if (allPatternsItem.length > 0) {
      try {
        await addItemToCart(allPatternsItem[0].variants[0].shopifyId, 1)
      } catch {
        setIsAddingToCart(false)
      }
    }
    setIsAddingToCart(false)
    setIsAddedToCart(true)
  }

  return (
    <>
      <Segment basic style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={addToCart}
          size="huge"
          style={{
            textAlign: 'center',
            backgroundColor: '#FFF15F',
            fontWeight: '800',
            color: 'black',
            border: '2px solid black',
          }}
          loading={isAddingToCart}
          disabled={isAddingToCart || isAddedToCart}
        >
          {isAddedToCart ? (
            <Header as="h3" content={'FULL PACK ADDED!'} />
          ) : (
            'GRAB ALL PATTERNS FOR $30!'
          )}
        </Button>
      </Segment>
    </>
  )
}

export default BuyAll
