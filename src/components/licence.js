import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const Licence = ({}) => {
  return (
    <Header as={'h3'}>
      <p>
        This work is licenced under{' '}
        <a
          href={
            'https://creativecommons.org/publicdomain/zero/1.0/?ref=ccchooser'
          }
          target="_blank"
        >
          CC0 1.0
        </a>{' '}
        <Image
          size={'mini'}
          src={
            'https://chooser-beta.creativecommons.org/img/cc_icon.104e8188.svg'
          }
          href={
            'https://creativecommons.org/publicdomain/zero/1.0/?ref=ccchooser'
          }
          target="_blank"
        />
        <Image
          size={'mini'}
          src={
            'https://chooser-beta.creativecommons.org/img/cc-zero_icon.c11548bc.svg'
          }
          href={
            'https://creativecommons.org/publicdomain/zero/1.0/?ref=ccchooser'
          }
          target="_blank"
        />
      </p>
    </Header>
  )
}

export default Licence
