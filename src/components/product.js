import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Container, Image } from 'semantic-ui-react'

import StoreContext from './../context/StoreContext'

const Product = ({ image, price }) => {
  const {
    addProductToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  // const handleAddToCart = () => {
  //   addProductToCart(product)
  // }

  return (
    <div>
      <Container>
        <Image centered={true} src={image} />
        <p>{price}</p>
      </Container>
    </div>
  )
}

export default Product
