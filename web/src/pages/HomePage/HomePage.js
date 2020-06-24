import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const HomePage = () => {
  return (
    <BlogLayout jumbotron={true}>
      <Container>
        <Row>
          <BlogPostsCell />
        </Row>
      </Container>
    </BlogLayout>
  )
}

export default HomePage
