import React from "react"
import { graphql } from "gatsby"
import HomeLayout from '../component/homeLayout'


export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <HomeLayout  people={frontmatter.people}  concepts={frontmatter.concepts} memories={frontmatter.memories} bestRecords={frontmatter.bestRecords}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h4 style = {{marginBottom:"0"}}>Date written: {frontmatter.date}</h4>
        
        </div>
      </div>
    </HomeLayout>
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
        bestRecords
        concepts
        memories
        people
      }
    }
  }
`