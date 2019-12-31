import React from 'react'


export default function FirestoreData({users, classes}) {
  return <div>
    <p>Total users in DB = {users.totalCount}</p>
    {
      users.nodes.map((user, index) => {
        return <div key={index} className={classes.post}>
          <p><b>Username: </b>{user.profile.username}</p>

          <h4>Posts</h4>
          {
            user.posts.map((y, i) => {
              return <div key={i}>
                <p><b>Title</b>: {y.title}</p>
                <p><b>Content</b>: {y.content}</p>
              </div>
            })
          }
        </div>
      })
    }
  </div>
}