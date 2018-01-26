import React, { Component } from 'react';
import './Element.css';
//import elements from '../src/PeriodicTableJSON.json'

class Element extends Component {
  render() {
    return (
      <li className="el">
        <div className="el-main">
            <span className="el-id">{this.props.id}</span>
            <span className="el-symbol">{this.props.symbol}</span>
        </div>          
        <div className="el-details">
            <span className="el-name">{this.props.name}</span>
            <span className="el-mass">{this.props.mass}</span>         
        </div>
      </li>
    );
  }
}

export default Element;