import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const heading = require('./../assets/header.svg')

const Heading = ({}) => (
  <div>
    <Segment basic>
      <Image centered={true} src={heading} />
    </Segment>
  </div>
)

export default Heading
