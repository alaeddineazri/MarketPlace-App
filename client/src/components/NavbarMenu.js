import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Navbar,Nav} from 'react-bootstrap'


const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="login">Login</Link>
                        <Link to="register">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu
