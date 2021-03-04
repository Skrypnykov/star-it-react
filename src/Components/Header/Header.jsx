import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const farStar = <FontAwesomeIcon icon={faStar} />

const Header = () => {
  
    function rollUp() {
        let elShow = document.getElementById('responsive-navbar-nav');
        elShow.classList.remove("show");
        let elCollapsed = document.getElementById('navbar-collapsed');
        elCollapsed.classList.add("collapsed");
    }
    
    return (
        <header className={classes.navBg}>
            <div className="content-wrapper">
                <Navbar collapseOnSelect expand="sm" variant="light">    
                    <Navbar.Brand className={classes.navLogo}><NavLink to="/" onClick={rollUp}>{farStar} Star It</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-collapsed" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className={classes.Link} to="/pricing" activeClassName={classes.activeLink} onClick={rollUp}>Pricing</NavLink>
                            <NavLink className={classes.Link} to="/team" activeClassName={classes.activeLink} onClick={rollUp}>Team</NavLink>
                            <NavLink className={classes.Link} to="/feedback" activeClassName={classes.activeLink} onClick={rollUp}>Feedback</NavLink>
                            <NavLink className={classes.Link} to="/dashboard" activeClassName={classes.activeLink} onClick={rollUp}>Dashboard</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className={classes.Link} to="/login" activeClassName={classes.activeLink} onClick={rollUp}>Sign in</NavLink>
                            <NavLink className={classes.Link} to="/join" activeClassName={classes.activeLink} onClick={rollUp}>Sign up</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>    
        </header>
    );
}

export default Header;
