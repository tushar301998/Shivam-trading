import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import './Header.css'
// import Marquee from "react-fast-marquee";

export default function Header() {
    return (
        <div className='header'>

  
  <Navbar bg="dark" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand>Shivam Trading & Manufacturing</Navbar.Brand>
    
   
    <Nav.Item className="ml-auto">
      <Nav.Link>Contact : +91-9837481739
      </Nav.Link>
    </Nav.Item>
    
  </Container>
</Navbar>

        </div>
    )
}
