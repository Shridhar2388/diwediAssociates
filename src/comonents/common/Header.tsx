import React from 'react';
import { Image, Button, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            {/* <Navbar.Brand href="/"></Navbar.Brand> */}
            {/* <NavLink to="/" className="nav-link" exact={true}>
                <Image src={logo} width="100" height="100" rounded className="d-block w-100" /> <span className="sr-only"></span></NavLink> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link"><FontAwesomeIcon icon="home"/> Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink to="/about" className="nav-link" exact={true}>About <span className="sr-only"></span></NavLink>
                    <NavLink to="/service" className="nav-link" exact={true}>Service <span className="sr-only"></span></NavLink>
                    <NavLink to="/contact" className="nav-link" exact={true}>Contact Us <span className="sr-only"></span></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}