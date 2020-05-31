require('dotenv').config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Print Monster',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/`,
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: 'figmapatterns',
        accessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        shouldIncludeSourcePlugin: true, // default
        shouldWrapRootElementWithProvider: true, // default
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
