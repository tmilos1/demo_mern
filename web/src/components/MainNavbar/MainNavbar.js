import { Link, routes } from '@redwoodjs/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import logoImage from './logo.png'

const MainNavbar = () => {
  return (
    <>
      <Navbar variant="light" bg="light" sticky="top" className="justify-content-between">
        <Navbar.Brand>
          <Image src={logoImage} height="60px" />
          <span style={{marginLeft: "20px"}}><Link to={routes.home()} >My Demo Blog</Link></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{marginRight: "100px"}}>
          <Nav>
            <Link to={routes.home()} className="nav-link">Home</Link>
            <Link to={routes.contact()} className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MainNavbar
