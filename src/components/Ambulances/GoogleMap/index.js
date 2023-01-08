import React, { Component } from 'react';
import Map from './Map';

export default class index extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          center={{ lat: 40.7484, lng: -73.9857 }}
          height="372px"
          zoom={15}
        />
      );
  }
}
