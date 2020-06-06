import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import Mailto from 'reactv16-mailto'

const Madeby = ({}) => {
  return (
    <Segment basic>
      <Header
        as={'h1'}
        size={'massive'}
        textAlign={'center'}
        style={{ whiteSpace: 'no-wrap' }}
      >
        Made by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jadiesunderland@gmail.com"
        >
          Jade
          <span role="img" aria-label="Woman Artist">
            {' '}
            👩‍🎨
          </span>
        </a>{' '}
        &{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:alex.cleo@gmail.com"
        >
          Alex{' '}
          <span role="img" aria-label="Construction Worker">
            {' '}
            👷
          </span>
        </a>
      </Header>
    </Segment>
  )
}

export default Madeby
