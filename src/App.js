import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Element from './Element';
import elements from '../src/PeriodicTableJSON.json'

class App extends Component {
  constructor() {
    super();
    this.state = {elements};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Elements">React Periodic Table</h1>
        </header>
        <ul className="elements-list">
        {
          this.state.elements.map(function(el) {
            return <Element
              key={el.number}
              id={el.number}
              name={el.name}
              mass={el.atomic_mass.toFixed(3)}
              symbol={el.symbol}     
            />;
          })
        }
        </ul>
        {/* <div className="copy">
          <a className="copy-link" href="https://www.facebook.com/alchemist.klesk">&copy; Alex Yatseyko</a>
        </div> */}
      </div>
    );
  }
}

export default App;
