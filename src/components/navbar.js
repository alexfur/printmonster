import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import Cart from './cart'

const Navbar = ({}) => (
  <Segment basic style={{ padding: '3rem' }}>
    <Menu
      id="cartMenu"
      borderless={true}
      fixed="top"
      style={{
        background: 'none',
      }}
    >
      <Menu.Item position="right">
        <Cart />
      </Menu.Item>
    </Menu>
  </Segment>
)

export default Navbar
