import React, { Component } from 'react';
import AddressItem from './AddressItem';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt);
  }

  render() {
    return (

      <div >
      <AddressItem label="Street" id="street" value={this.props.street} onChange={this.handleChange} placeholder="Street Address" />
      <AddressItem label="City" placeholder={"City"} id="city" value={this.props.city} onChange={this.handleChange}  />
      <AddressItem label="State" id="state" value={this.props.state} onChange={this.handleChange} placeholder="State" />
      <AddressItem label="Postal Code" id="postalCode" value={this.props.postalCode} onChange={this.handleChange} placeholder="Postal Code" />
      <AddressItem label="Country" id="country" value={this.props.country} onChange={this.handleChange} placeholder="Country" />
      </div>
    );
  }
}

export default AddressInput;