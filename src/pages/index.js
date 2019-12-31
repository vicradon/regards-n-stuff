import React from 'react'
import { graphql } from 'gatsby'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Layout from '../components/layout'
import MarkdownData from '../components/markdownData'
import FirestoreData from '../components/firestoreData'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  post: {
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '0 1rem',
    marginBottom: '1rem'
  },
  date: {
    fontSize: '0.9rem'
  }
}))

export default function Index({ data }) {
  const classes = useStyles();
  const edges = data.allMarkdownRemark.edges;
  const users = data.allUsers;
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>Markdown Data</h2>
      <MarkdownData edges={edges} classes = {classes}/>
      
      <h2>Firestore Data</h2>
      <FirestoreData users={users} classes = {classes} />
    </Layout >
  )
}
export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        excerpt(pruneLength: 30)
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          path
          title
        }
      }
    }
  }
  allUsers {
    nodes {
      posts {
        content
        title
      }
      profile {
        username
      }
    }
    totalCount
  }
}
`