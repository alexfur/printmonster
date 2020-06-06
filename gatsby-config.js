require('dotenv').config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Print Monster',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Print Monster`,
        short_name: `Print Monster`,
        start_url: `/`,
        display: `standalone`,
        icon: `./src/assets/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `./src/assets/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `./src/assets/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
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
  ],
}
