import React from 'react'
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'

function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  
      <Link to={"/newProduct"} ><Button variant="outline-success">Add Product</Button></Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavbarTop