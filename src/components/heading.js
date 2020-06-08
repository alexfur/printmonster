import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const Heading = ({}) => {
  const heading = require('./../assets/heading.png')
  return (
    <Segment basic>
      <Image src={heading} />
    </Segment>
  )
}

export default Heading
