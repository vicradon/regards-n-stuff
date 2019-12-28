import React from 'react'
import { graphql, Link } from 'gatsby'
import MakeStyles from '@material-ui/core/MakeStyles'


export default function Index({ data }) {
  const edges = data.allMarkdownRemark.edges;
  return (
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <div>
        {
          edges.map(x => {
            return <Link to = {`${x.node.frontmatter.path}`}>
              <p dangerouslySetInnerHTML={{ __html: x.node.excerpt }} />
              <p>Date Written: {x.node.frontmatter.date}</p>
            </Link>
          })
        }
      </div>
    </>
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
        excerpt(truncate: true, format: MARKDOWN)
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          path
        }
      }
    }
  }
}
`