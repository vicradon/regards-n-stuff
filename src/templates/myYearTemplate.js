import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  console.log(data)
  return <p>Hello</p>
  // return (<p></p>{data})
  // const { myYearUsers } = data
  // const {  data:userData } = myYearUsers
  // return (
  //   <div >
  //     <p>Hello!</p>
  //     {/* {profile.name} */}
  //     {userData.memories.best}
  //   </div>
  // )
}

export const pageQuery1 = graphql`
query ($path: String!) {
  myYearUsers(profile: {nickname: {eq: $path}}) {
    profile {
      nickname
      name
    }
    data {
      memories {
        best
      }
    }
  }
}
`