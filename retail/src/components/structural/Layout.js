import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import React from 'react';

import icon from '../../assets/leaf.svg'




function Layout(props) {

    return (
        <div>
            <Navbar bg="primary" variant="primary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="icon"
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Name
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <>
                        {
                        //comment 
                        }                   
                        </>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="body-spacer">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;