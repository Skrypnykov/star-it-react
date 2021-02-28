import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HeaderComponent, FooterComponent, HomePage, PricingPage, TeamPage, FeedbackPage, DashboardPage, LoginPage, RegPage } from './Components';

export default function MainRouter() {
  return (
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" render = { () => <HomePage/>} />
        <Route path="/pricing" render = { () => <PricingPage/>}/>
        <Route path="/team" render = { () => <TeamPage/>}/>
        <Route exact path="/feedback" render = { () => <FeedbackPage/>}/>
        <Route path="/dashboard" render = { () => <DashboardPage/>}/>
        <Route path="/login" render = { () => <LoginPage/>}/>
        <Route path="/join" render = { () => <RegPage/>}/>
      </Switch>
      <FooterComponent/>
    </Router>
  );
}