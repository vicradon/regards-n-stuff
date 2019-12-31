require("dotenv").config();
// const firebase = require('firebase/app');
// require('firebase/firestore');
// const firestore = firebase.firestore();
// // const firestore = new Firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);

module.exports = {
  siteMetadata: {
    title: `Ralph's Gatsby Blog`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-cred.json"),
        types: [
          {
            type: 'Users',
            collection: 'users',
            map: doc => ({
              posts: doc.posts,
              profile: doc.profile
            }),
          },
          {
            type: 'myYearUsers',
            collection: 'myYearUsers',
            map: doc => ({
              data: doc.data,
              profile: doc.profile
            }),
          },
        ],
      },
    },
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
