module.exports = {
  siteMetadata: {
    title: 'Print Monster',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
  ],
}
