import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar sticky="top" variant="dark" className="Navbar" expand="md">
            <Container>
                <Navbar.Brand ><NavLink to="/">Glozzom</NavLink> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <NavLink exact to="/">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink exact to="/about_us">About us</NavLink> 
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink exact to="/services">Services</NavLink> 
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink exact to="blog">blog</NavLink> 
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink exact to="contact">contact</NavLink> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;