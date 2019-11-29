import React, { Component, Fragment } from 'react';
import './App.css';
import ElementItem from './ElementItem/ElementItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Elements from './Elements/Elements'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Elements}/>
          <Route exact path="/element/:id" component={ElementItem}/>
        </Fragment> 
      </Router>
    );
  }
}

export default App;
