import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const farStar = <FontAwesomeIcon icon={faStar} />;

const Header = () => {
  let navbarToggle = React.createRef();
  let navbarCollapse = React.createRef();

  let collapseNav = () => {
    navbarCollapse.current.classList.remove("show");
    navbarToggle.current.classList.add("collapsed");
  };

  return (
    <header className={classes.navBg}>
      <div className="content-wrapper">
        <Navbar collapseOnSelect expand="sm" variant="light">
          <Navbar.Brand className={classes.navLogo}>
            <NavLink to="/" onClick={collapseNav}>
              {farStar} Star It
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            ref={navbarToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav" ref={navbarCollapse}>
            <Nav className="mr-auto">
              <NavLink
                className={classes.Link}
                to="/pricing"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Pricing
              </NavLink>
              <NavLink
                className={classes.Link}
                to="/feedback"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Feedback
              </NavLink>
              <NavLink
                className={classes.Link}
                to="/dashboard"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={classes.Link}
                to="/team"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Team
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className={classes.Link}
                to="/login"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Sign in
              </NavLink>
              <NavLink
                className={classes.Link}
                to="/join"
                activeClassName={classes.activeLink}
                onClick={collapseNav}
              >
                Sign up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
