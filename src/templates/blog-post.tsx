import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.wordPress.posts.edges[0].node
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> On: {post.date} </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordPress {
      posts(where: { name: $slug }) {
        edges {
          node {
            title
            content
            slug
            date
          }
        }
      }
    }
  }
`
