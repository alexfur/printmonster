import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Heading = ({}) => (
  <Segment
    basic
    style={{
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Header id="mainHeader" textAlign="center" as="h1">
      PRINT MONSTER
    </Header>
  </Segment>
)

export default Heading
