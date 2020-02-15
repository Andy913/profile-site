import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./Headerbar.css";

class Headerbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" className = "navbar-brand">Andy Ho</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                <Nav.Link href="/blog">Blog</Nav.Link>
                <NavDropdown title="Projects">
                    <NavDropdown.Item href="/#projects/3.1">Project #1</NavDropdown.Item>
                    <NavDropdown.Item href="/#projects/3.2">Project #2</NavDropdown.Item>
                    <NavDropdown.Item href="/#projects/3.3">Project #3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/#projects/3.4">Project #4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Headerbar;