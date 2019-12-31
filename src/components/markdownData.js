import React from 'react'
import { Link } from 'gatsby'

export default function MarkdownData({ edges, classes }) {
  return <div>
    {
      edges.map(x => {
        return <Link key={x.node.frontmatter.path} className={classes.link} to={`${x.node.frontmatter.path}`}>
          <div className={classes.post}>
            <h3>{x.node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: x.node.excerpt }} />
            <p className={classes.date}>Date Written: {x.node.frontmatter.date}</p>
          </div>
        </Link>
      })
    }
  </div >
}
