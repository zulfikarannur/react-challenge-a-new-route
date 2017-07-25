import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css'

import APOD from './components/APOD'
import NeoWS from './components/NeoWS'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <div className="App">
              <div className='navbar'>
                <div className='navbar-brand'>
                  <img className='img-brand' src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt="NASA"/>
                </div>
                <div className='navbar-menu'>
                  <div className='navbar-start'>
                    <Link className='navbar-item' to='/APOD'> APOD </Link>
                    <Link className='navbar-item' to='/NeoWS'> NeoWS </Link>
                  </div>
                </div>
              </div>
            </div>
            <Route exact path="/APOD" component={APOD}/>
            <Route exact path="/NeoWS" component={NeoWS}/>
        </div>
      </Router>
    );
  }
}

export default App;
