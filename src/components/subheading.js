import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Subheading = ({}) => {
  return (
    <Segment basic>
      <Header as={'h1'} textAlign={'center'}>
        50 patterns handmade in Figma
      </Header>
      <Header as={'h2'} textAlign={'center'}>
        Spice up your next landing page, blog post or newsletter. <br /> Open
        them in Figma and rip them apart to your liking.
      </Header>
    </Segment>
  )
}

export default Subheading
