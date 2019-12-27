import React from "react"
import { graphql } from "gatsby"


export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h4 style={{ marginBottom: "0" }}>Date written: {frontmatter.date}</h4>
        {/* <div dangerouslySetInnerHTML = {{__html: html}} /> */}
      </div>
    </div>
  )
}
// html
//         date(formatString: "MMMM DD YYYY")

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
    }
  }
`