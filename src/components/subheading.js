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
        50 customizable patterns for your next project - made in Figma.
      </Header>
    </Segment>
  )
}

export default Subheading
