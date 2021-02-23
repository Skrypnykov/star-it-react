import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import MySlider from './Components/Slider/Slider';
import Navtabs from './Components/Navtabs/Navtabs';
import Rating from './Components/Rating/Rating';
import MyTeam from './Components/Team/Team';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Footer from './Components/Footer/Footer';

const farStar = <FontAwesomeIcon icon={faStar} />

export default function App() {
  return (
    <Router>
      <div>
        <header className="navBg">
          <div className="content-wrapper">
            <Navbar collapseOnSelect expand="sm" variant="light">    
              <Navbar.Brand href="/" className="navLogo">
                {farStar} Star It
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/team">Team</Nav.Link>
                    <Nav.Link href="/feedback">Feedback</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="/login">Sign in</Nav.Link>
                    <Nav.Link href="/join" className="navJoin">Sign up</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>    
        </header>

        <Switch>
          
          <Route path="/join">
            <Signup />
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <MySlider />
      <Footer />
    </div>
  );
}

function Pricing() {
  return (
    <div>
      <Footer />
  </div>
  );
}

function Feedback() {
  return (
    <div>
      <Navtabs />
      <Rating />
      <Footer />
    </div>
  );
}

function Team() {
  return (
    <div>
      <MyTeam />
      <Footer />
    </div>
  );
}

function Signin() {
  return (
    <div>
      <LoginForm />
      <Footer />
    </div>
  );
}
function Signup() {
  return (
    <div>
      <RegForm />
      <Footer />
    </div>
  );
}