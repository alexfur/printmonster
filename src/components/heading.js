import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const heading = require('./../assets/header.png')

const Heading = ({}) => (
  <div>
    <Container>
      <Image centered={true} src={heading} />
    </Container>
  </div>
)

export default Heading
