import React, { Component } from 'react';
import axios from 'axios'

export default class NeoWS extends Component {
  constructor() {
    super()
    this.state = {
      nearEarthObject: {}
    }
  }

  componentWillMount(){
    this.setState({
      nearEarthObject: {}
    })
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=3Qo4akjdvDQvy8Zhjf4ADK2IkIjkoS4FddhFRytQ')
    .then((data) => {
      this.setState({
        nearEarthObject: data.data.near_earth_objects
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
      <div className='container'>
        <h1 className='title has-text-centered'> Near Earth Object Web Service (NeoWS) </h1>
        <h2 className='subtitle has-text-centered'> Near Earth Object For One Week From Today </h2>
        {Object.keys(this.state.nearEarthObject).map((perDate) => {
          return <div className='card'>
          <header className="card-header">
            <p className="card-header-title has-text-centered">
              Near Earth Object data on {perDate}
            </p>
          </header>
          <div className='card-content'>
          (// TODO: Parse content correctly)
          </div>
          </div>
        })}
      </div>
    )
  }

}
