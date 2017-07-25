import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      nasaAPI: {}
    }
  }

  componentWillMount(){
    this.setState({
      nasaAPI: {}
    })
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3Qo4akjdvDQvy8Zhjf4ADK2IkIjkoS4FddhFRytQ')
    .then((data) => {
      this.setState({
        nasaAPI: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className='title has-text-centered'> NASA Open API </h1>
        <h2 className='subtitle has-text-centered'> Today on NASA API </h2>
        <p className='subtitle has-text-centered'> {this.state.nasaAPI.date} </p>
        <p className='has-text-centered'>{this.state.nasaAPI.title}</p>
          <div className='columns'>
            <div className='column is-4 is-offset-4'>
              <img src={this.state.nasaAPI.url} alt={this.state.nasaAPI.title}/>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              <p> {this.state.nasaAPI.explanation} </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
