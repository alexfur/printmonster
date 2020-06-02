import React, { useState } from 'react'
import { Image, Modal, Header, Segment, Label } from 'semantic-ui-react'
import { useAddItemToCart } from 'gatsby-theme-shopify-manager'
import useHover from 'react-use-hover'

const Product = ({ title, image, price, productId }) => {
  const addItemToCart = useAddItemToCart()
  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 0,
    mouseLeaveDelayMS: 0,
  })
  const [openProductModal, setOpenProductModal] = useState(false)

  const grab = require('./../assets/grab.svg')

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
        <div style={{ textAlign: 'center' }}>
          <Image
            src={image}
            centered
            wrapped
            size="large"
            style={{
              border: '2px solid black',
            }}
            label={
              <div>
                <Label
                  attached="bottom right"
                  style={{
                    transform: 'translate(0, 40%)',
                    borderRadius: '50%',
                    border: '2px solid black',
                    backgroundColor: 'red',
                    color: 'white',
                    height: '3.5rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <h1 id="strokedP">${Math.round(price)}</h1>
                </Label>
              </div>
            }
          />
        </div>

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

    try {
      await addItemToCart(variantId, quantity)
      alert('Successfully added that item to your cart!')
    } catch {
      alert('There was a problem adding that item to your cart.')
    }
  }

  return (
    <div>
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

      <div>
        <Image
          {...hoverProps}
          style={{
            backgroundColor: 'white',
            border: '2px solid black',
            cursor: 'pointer',
          }}
          onClick={() => {
            setOpenProductModal(true)
          }}
          centered
          src={image}
        />

        <Image
          {...hoverProps}
          centered
          style={{
            visibility: isHovering ? 'visible' : 'hidden',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }}
          src={grab}
          onClick={() => {
            setOpenProductModal(true)
          }}
        />
      </div>

      {productModal}
    </div>
  )
}

export default Product
