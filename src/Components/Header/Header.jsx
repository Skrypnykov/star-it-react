import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
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
                    <Navbar.Brand className={classes.nav_logo}><NavLink to="/">{farStar} Star It</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className={classes.Link} to="/pricing" activeClassName={classes.activeLink}>Pricing</NavLink>
                            <NavLink className={classes.Link} to="/team" activeClassName={classes.activeLink}>Team</NavLink>
                            <NavLink className={classes.Link} to="/feedback" activeClassName={classes.activeLink}>Feedback</NavLink>
                            <NavLink className={classes.Link} to="/dashboard" activeClassName={classes.activeLink}>Dashboard</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className={classes.Link} to="/login" activeClassName={classes.activeLink}>Sign in</NavLink>
                            <NavLink className={classes.Link} to="/join" activeClassName={classes.activeLink}>Sign up</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>    
        </header>
    );
}

export default Header;