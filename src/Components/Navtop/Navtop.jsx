import React from 'react';
import classes from'./Navtop.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const farStar = <FontAwesomeIcon icon={faStar} />

const Navtop = () => {
    return (
        <header className={classes.navBg}>
            <div className="content-wrapper">
                <Navbar collapseOnSelect expand="sm" variant="light">    
                    <Navbar.Brand href="#home" className={classes.navLogo}>
                        {farStar} Star It
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#enterprise">Enterprise</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#signin">Sign in</Nav.Link>
                            <Nav.Link href="#signup">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>    
        </header>
    );
}

export default Navtop;