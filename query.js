const query = {
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Ralph's Gatsby Blog"
      }
    },
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "excerpt": "Ipsum Lorem Lorem ipsum dolor…",
            "frontmatter": {
              "date": "27 December 2019",
              "path": "/post2",
              "title": "The nemb fights for freedom"
            }
          }
        },
        {
          "node": {
            "excerpt": "Lorem! I love lorem",
            "frontmatter": {
              "date": "27 December 2019",
              "path": "/post1",
              "title": "The nemb returns"
            }
          }
        }
      ]
    },
    "allUsers": {
      "nodes": [
        {
          "posts": [
            {
              "content": "GitHub has the code",
              "title": "It's opensource!"
            },
            {
              "content": "Firebase is the backend!",
              "title": "A CRUD firebase App"
            }
          ],
          "profile": {
            "username": "Osinachi"
          }
        },
        {
          "posts": [
            {
              "content": "",
              "title": ""
            }
          ],
          "profile": null
        },
        {
          "posts": [
            {
              "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, magni?",
              "title": "Lorem Ipsum"
            },
            {
              "content": "Some content",
              "title": "Post 2"
            }
          ],
          "profile": {
            "username": "Ralph"
          }
        }
      ],
      "totalCount": 3
    }
  }
}