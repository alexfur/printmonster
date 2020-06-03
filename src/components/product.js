import React, { useState, useEffect } from 'react'
import {
  Image,
  Modal,
  Header,
  Segment,
  Label,
  Grid,
  Icon,
  Button,
} from 'semantic-ui-react'
import {
  useAddItemToCart,
  useUpdateItemQuantity,
  useCartItems,
} from 'gatsby-theme-shopify-manager'
import useHover from 'react-use-hover'

const Product = ({ title, image, price, productId }) => {
  const grab = require('./../assets/grab.svg')
  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 0,
    mouseLeaveDelayMS: 0,
  })
  const [openProductModal, setOpenProductModal] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const addItemToCart = useAddItemToCart()
  const updateItemQuantity = useUpdateItemQuantity()
  const cartItems = useCartItems()

  // This block ensures this product's isAddedToCart state is consistent with side effects
  // (for example if this product is removed from the cart).
  useEffect(() => {
    let added = false
    cartItems.forEach(product => {
      if (product.variant.id === productId) {
        added = true
      }
    })
    if (!added) setIsAddedToCart(false)
  }, [cartItems])

  const addToCart = async () => {
    addProductToCart().then(() => {
      setProductQuantityToOne().then(() => {
        setIsAddedToCart(true)
      })
    })
  }

  const addProductToCart = async () => {
    setIsAddingToCart(true)
    try {
      await addItemToCart(productId, 1)
    } catch {
      setIsAddingToCart(false)
    }
  }

  const setProductQuantityToOne = async () => {
    try {
      await updateItemQuantity(productId, 1)
    } catch {
      setIsAddingToCart(false)
    }
    setIsAddingToCart(false)
  }

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
          <div style={{ textAlign: 'right' }}>
            <Icon
              onClick={() => {
                setOpenProductModal(false)
              }}
              name="close"
              size="large"
              style={{
                paddingBottom: '2rem',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            />
          </div>
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
                    transform: 'translate(0%, 40%)',
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
          <Grid stackable>
            <Grid.Row>
              <Segment basic />
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as="h1" textAlign="center">
                  {title}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    textAlign="center"
                    onClick={addToCart}
                    style={{ cursor: 'pointer' }}
                    color={isAddedToCart ? 'grey' : 'twitter'}
                    size="big"
                    loading={isAddingToCart}
                    disabled={isAddedToCart}
                  >
                    {isAddedToCart ? (
                      <Header as="h3" content={'Added!'} />
                    ) : (
                      'Add to cart'
                    )}
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                  Includes <span style={{ fontWeight: 600 }}>FIG</span> and{' '}
                  <span style={{ fontWeight: 600 }}>SVG</span> copies
                </p>
              </Grid.Column>
              <Grid.Column>
                <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                  Size: 800KB
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

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
          label={
            <div>
              <Label
                attached="bottom right"
                style={{
                  transform: 'translate(0%, 40%)',
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
