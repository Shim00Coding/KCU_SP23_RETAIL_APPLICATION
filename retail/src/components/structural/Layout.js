import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import React from 'react';
import '../../navbar.css';
import icon from '../../assets/leaf.svg'
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout(props) {

    return (
        <div>
            <Navbar className="bar" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="icon"
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{ color: "#ff7f00" }} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="body-spacer">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;
