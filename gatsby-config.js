/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Source Code Pro',
            variants: ['600']
          }
        ]
      }
    },
    'gatsby-plugin-sass'
  ],
  siteMetadata: {
    title: 'Tidkinbrae'
  }
}
