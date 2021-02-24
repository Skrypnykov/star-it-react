import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Router.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MySlider from './Components/Slider/Slider';
import Navtabs from './Components/Navtabs/Navtabs';
import MyTeam from './Components/Team/Team';
import OurPricing from './Components/Pricing/Pricing';
import LoginForm from './Components/LoginForm/LoginForm';
import RegForm from './Components/RegForm/RegForm';

export default function MyRouter() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" render={ () => <Home/>}/>     
          <Route exact path="/join" render={ () => <Signup/>}/>
          <Route exact path="/login" render={ () => <Signin/>}/>
          <Route exact path="/feedback" render={ () => <Feedback/>}/>
          <Route exact path="/team" render={ () => <Team/>}/>
          <Route exact path="/pricing" render={ () => <Pricing/>}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <MySlider/>
      <OurPricing/>
    </div>
  );
}

function Pricing() {
  return (
    <div>
      <OurPricing/>
    </div>
  );
}

function Feedback() {
  return (
    <Navtabs/>
  );
}

function Team() {
  return (
    <div>
      <MyTeam/>
    </div>
  );
}

function Signin() {
  return (
    <div>
      <LoginForm/>
    </div>
  );
}
function Signup() {
  return (
    <div>
      <RegForm/>
    </div>
  );
}