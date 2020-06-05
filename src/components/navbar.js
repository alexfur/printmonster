import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

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
      // fixed={'top'}
      id="cartMenu"
      borderless={true}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 999,
      }}
      compact={true}
    >
      <Menu.Item position="right">
        <Cart />
      </Menu.Item>
    </Menu>
  </Segment>
)

export default Navbar
