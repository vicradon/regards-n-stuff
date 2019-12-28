import React from 'react'
import { graphql, Link } from 'gatsby'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  post: {
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '0 0.5rem',
    marginBottom:'1rem'
  },
  date: {
    fontSize:'0.9rem'
  }
}))

export default function Index({ data }) {
  const classes = useStyles();
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <div>
        {
          edges.map(x => {
            return <Link key={x.node.frontmatter.path} className={classes.link} to={`${x.node.frontmatter.path}`}>
              <div className={classes.post}>
                <h3>{x.node.frontmatter.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: x.node.excerpt }} />
                <p className = {classes.date}>Date Written: {x.node.frontmatter.date}</p>
              </div>
            </Link>
          })
        }
      </div>
    </Layout>
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
}
`