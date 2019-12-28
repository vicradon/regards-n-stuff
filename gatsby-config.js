require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ralph's Gatsby Blog`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/markdown-posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
        },
      },
    },
  ],
}
