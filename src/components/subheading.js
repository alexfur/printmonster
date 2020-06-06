import React from 'react'
import { Segment, Header, Responsive } from 'semantic-ui-react'

const Subheading = ({}) => {
  return (
    <Segment basic>
      <Header
        as={'h1'}
        size={'massive'}
        textAlign={'center'}
        style={{ fontSize: '2.5rem', whiteSpace: 'no-wrap' }}
      >
        50 patterns handmade in Figma
      </Header>
      <Header as={'h2'} textAlign={'center'}>
        Spice up your next landing page / blog post / newsletter with fully
        editable vector patterns
      </Header>
    </Segment>
  )
}

export default Subheading
