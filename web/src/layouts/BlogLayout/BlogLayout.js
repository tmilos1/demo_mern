import { Link, routes } from '@redwoodjs/router'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainNavbar from 'src/components/MainNavbar'
import HomeJumbotron from 'src/components/HomeJumbotron'
import Footer from 'src/components/Footer/Footer'

const BlogLayout = ({ jumbotron, children }) => {
  return (
    <>
      <MainNavbar />

      { jumbotron ? <HomeJumbotron /> : null }

      <Container>
        <Row>
          <Col><main>{children}</main></Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default BlogLayout
