require('dotenv').config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Print Monster',
    titleTemplate: 'PrintMonster',
    description: 'Vector patterns made in Figma.',
    url: 'https://figmapatterns.netlify.app',
    image: '/og_image.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@alex_furm',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PrintMonster`,
        short_name: `prntmnstr`,
        start_url: `/`,
        display: `standalone`,
        icon: `./src/assets/favicon.png`,
        legacy: true, // this will not add apple-touch-icon links to <head>
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168852391-1',
      },
    },
  ],
}
