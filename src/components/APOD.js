import React, { Component } from 'react';
import axios from 'axios'

export default class APOD extends Component {
  constructor() {
    super()
    this.state = {
      APOD: {}
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
        APOD: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
      <div className="container">
        <h1 className='title has-text-centered'> Astronomy Photo of the Day (APOD) </h1>
        <h2 className='subtitle has-text-centered'> Today on APOD </h2>
        <p className='subtitle has-text-centered'> {this.state.APOD.date} </p>
        <p className='has-text-centered'>{this.state.APOD.title}</p>
          <div className='columns'>
            <div className='column is-4 is-offset-4'>
              <img src={this.state.APOD.url} alt={this.state.APOD.title}/>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              <p> {this.state.APOD.explanation} </p>
            </div>
          </div>
      </div>
    )
  }
}
