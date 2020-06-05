import React from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

import Cart from './cart'

const Navbar = ({}) => (
  <Segment
    basic
    style={{
      padding: '3rem',
      textAlign: 'right',
    }}
  >
    <Menu
      id="cartMenu"
      borderless={true}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      compact={true}
    >
      <Menu.Item
        position="right"
        style={{
          zIndex: 9999,
        }}
      >
        <Cart />
      </Menu.Item>
    </Menu>
  </Segment>
)

export default Navbar
