module.exports = {
  siteMetadata: {
    title: 'Zahin Hasan Prangon',
    author: 'Zahin Hasan Prangon'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
