import React from "react";
import "./Router.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HeaderComponent,
  FooterComponent,
  HomePage,
  PricingPage,
  TeamPage,
  FeedbackPage,
  DashboardPage,
  LoginPage,
  RegPage,
} from "./Components";

export default function MainRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/pricing" render={() => <PricingPage />} />
        <Route path="/team" render={() => <TeamPage />} />
        <Route path="/feedback" render={() => <FeedbackPage />} />
        <Route path="/dashboard" render={() => <DashboardPage />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/join" render={() => <RegPage />} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}
