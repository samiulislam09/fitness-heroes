import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
 
function Header() {
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home#services">Services</Nav.Link>
      <Nav.Link href="/home#contactus">Contact Us</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header