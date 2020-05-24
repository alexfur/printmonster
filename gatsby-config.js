require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Print Monster',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'figmapatterns',
        accessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: '2020-01',
        verbose: true,
        paginationSize: 1,
        includeCollections: ['shop', 'content'],
      },
    },
  ],
}
