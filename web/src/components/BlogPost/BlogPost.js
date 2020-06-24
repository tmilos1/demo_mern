import { Link, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import styles from './BlogPost.module.css'

const BlogPost = ({ post, showShortText }) => {
  let dateTime = new Date(post.createdAt)

  return (
    <Card className={[styles.card, "mt-3", "mb-3"].join(' ')}>
      <Card.Body>
        <Card.Title><Link to={routes.blogPost({ id: post.id })}>{post.title}</Link></Card.Title>
        <Card.Text>
          {showShortText ?
            post.body.substring(0, 300) + '...'
            :
            post.body
          }
        </Card.Text>
        Posted at: <time>{dateTime.toDateString()}</time>
      </Card.Body>
    </Card>
  )
}

export default BlogPost
