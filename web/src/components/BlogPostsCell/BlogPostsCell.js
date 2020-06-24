import { Link, routes } from '@redwoodjs/router'

import Col from 'react-bootstrap/Col'

import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map(post => (
    <Col md={4}><BlogPost key={post.id} post={post} showShortText={true}/></Col>
  ))
}
