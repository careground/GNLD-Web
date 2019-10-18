import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Care, User, Danger } from './';
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
         <Route path='/home' component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/care' component={Care}/>
        <Route path='/danger' component={Danger}/>
      </Router>
    );
  }
}

export default App;
