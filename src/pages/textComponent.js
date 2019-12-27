import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

function MyComponent() {
  const [user, setUser] = React.useState()

  useFirebase(firebase => {
    firebase
      .database()
      .ref("/user")
      .once("value")
      .then(snapshot => {
        setUser(snapshot.val())
      })
  }, [])

  return <p>Hello {user ? user.name : "there"}</p>
}

export default MyComponent