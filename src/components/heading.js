import React from 'react'
import { Segment } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Heading = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "heading.png" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Segment basic>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Segment>
  )
}

export default Heading
