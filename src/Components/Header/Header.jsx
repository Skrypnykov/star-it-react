import React from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const farStar = <FontAwesomeIcon icon={faStar} />

const Header = () => {
    return (
        <header className={classes.nav_bg}>
            <div className="content-wrapper">
                <Navbar collapseOnSelect expand="sm" variant="light">    
                    <Navbar.Brand href="/" className={classes.nav_logo}>{farStar} Star It</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <Nav.Link href="/team">Team</Nav.Link>
                            <Nav.Link href="/feedback">Feedback</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Sign in</Nav.Link>
                            <Nav.Link href="/join" className={classes.nav_join}>Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>    
        </header>
    );
}

export default Header;