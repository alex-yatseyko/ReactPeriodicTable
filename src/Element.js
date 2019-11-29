import React, { Component } from 'react';
import './Element.css';
import { Link } from 'react-router-dom';
// import ElementItem from './ElementItem/ElementItem';
//import elements from '../src/PeriodicTableJSON.json'

class Element extends Component {
  render() {
    return (
      <Link to={`/element/${this.props.id}`}>
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

      </Link>
    );
  }
}

export default Element;