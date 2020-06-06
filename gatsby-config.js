require('dotenv').config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Print Monster',
    description: 'Vector patterns handmade in Figma',
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
        short_name: `PrintMonster`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/favicon1.png`,
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
