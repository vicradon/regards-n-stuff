import React from "react"
import { graphql } from "gatsby"

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
 
}))

export default function Template({ data }) {
  const classes = useStyles();
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div >
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h4 style={{ marginBottom: "0" }}>Date written: {frontmatter.date}</h4>
        <div dangerouslySetInnerHTML = {{__html: html}} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD YYYY")
        path
        title
      }
    }
  }
`