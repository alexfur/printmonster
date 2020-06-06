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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
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
