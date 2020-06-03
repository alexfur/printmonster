import React from 'react'
import { useAddItemsToCart } from 'gatsby-theme-shopify-manager'

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

const BuyAll = ({ data }) => {
  const addItemsToCart = useAddItemsToCart()

  const getAllItems = () => {
    const allItems = data.allShopifyProduct.nodes.map(product => {
      return { variantId: product.variants[0].shopifyId, quantity: 1 }
    })
    return allItems
  }

  const addAllToCart = async () => {
    try {
      await addItemsToCart(getAllItems())
    } catch {}
  }

  return (
    <>
      <Segment basic>
        <Button
          onClick={() => {
            addAllToCart()
          }}
          style={{ textAlign: 'center' }}
        >
          GRAB ALL FOR $30!
        </Button>
      </Segment>
    </>
  )
}

export default BuyAll
