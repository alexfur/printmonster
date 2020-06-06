import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Subheading = ({}) => {
  return (
    <Segment basic>
      <Header
        as={'h1'}
        textAlign={'center'}
        style={{ fontSize: '2rem', whiteSpace: 'no-wrap' }}
      >
        Spice up your next project with 50 fully editable vector patterns
        handmade in Figma.
      </Header>
    </Segment>
  )
}

export default Subheading
