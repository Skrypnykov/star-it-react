import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import OurPricing from './Components/Pricing/Pricing';
import MyTeam from './Components/Team/Team';
import CustomerFeedback from './Components/FeedBack/FeedBack';
import LoginForm from './Components/LoginForm/LoginForm';
import RegForm from './Components/RegForm/RegForm';


const App = (props) => {
  return (
    <Router>
      <Header/>
      <div>
          <Route exact path='/' component={HomePage}/>
          <Route path="/pricing" component={OurPricing}/>
          <Route path="/team" component={MyTeam}/>
          <Route exact path="/feedback" component={CustomerFeedback}/>
          <Route path="/dashboard" />
          <Route path="/login"component={LoginForm}/>
          <Route path="/join" component={RegForm}/>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;