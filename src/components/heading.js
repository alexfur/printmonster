import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const heading = require('./../assets/heading.png')

const Heading = ({}) => (
  <Segment basic>
    <Image src={heading} centered={true} />
  </Segment>
)

export default Heading
