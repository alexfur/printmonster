import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Subheading = ({}) => {
  return (
    <Segment basic>
      <Header
        as={'h1'}
        size={'massive'}
        textAlign={'center'}
        style={{ fontSize: '3rem' }}
      >
        50 patterns handmade in Figma
      </Header>
      <Header as={'h2'} textAlign={'center'}>
        Spice up your next landing page, blog post or newsletter • Open and edit
        any pattern in Figma
      </Header>
    </Segment>
  )
}

export default Subheading
