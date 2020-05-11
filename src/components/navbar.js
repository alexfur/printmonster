import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'

const Navbar = ({ siteTitle }) => (
  <div>
    <Container>
      <h1 style={{ padding: '1rem 0', marginBottom: '2rem' }}>
        <Link style={{ color: 'black' }} to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </div>
)

export default Navbar
