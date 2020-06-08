import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Link } from 'gatsby'

const Subheading = ({}) => {
  return (
    <Segment basic>
      <Header
        as={'h1'}
        textAlign={'center'}
        style={{ fontSize: '2rem', whiteSpace: 'no-wrap' }}
      >
        50 customizable patterns for your next project - made in Figma <br />
        <Link to={'/examples'}>
          <span style={{ textDecoration: 'underline', color: 'black' }}>
            (show me example uses)
          </span>
        </Link>
      </Header>
    </Segment>
  )
}

export default Subheading
