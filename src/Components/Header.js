import React, { Component } from 'react';
import { Button, Container, Form, FormControl, NavbarBrand, Navbar, Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router';

import Home from '../Pages/Home'
import Account from '../Pages/Account'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'

export default class Header extends Component{
    render() {
        return(
            <>
            <Navbar sticky="top" CollapseOnSelect expand="md" bg="dark" variant ="dark">
                <Container>
                    <Navbar.Brand href="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id ="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/account"> Account </Nav.Link>

                        </Nav>
                        <Form inline>
                            
                        </Form>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                    <Route exact path="/account" element={<Account/>} />
                </Routes>
            </Router>

            </>
        )
    }
}