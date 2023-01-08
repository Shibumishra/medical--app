import React, { Component } from 'react';
import AddressSuggest from './AddressSuggest';
import AddressInput from './AddressInput';
import axios from 'axios';

const APP_ID_HERE = 'APP_ID_HERE';
const APP_CODE_HERE = 'APP_CODE_HERE';
const SaveAddressApi = "retail/save_address";
const addreaaData = [
  {
  "first_name":"",
  "middle_name":"",
  "last_name":"",
  "address":"",
  "address_type_id": '',
  "country_id": '',
  "state_id": '',
  "district_id": '',
  "city_id": '',
  "landmark": "",
  "zipcode": "",
  "phone": "",
  "organization_name": "",
  "is_primary": "",
  "creation_date": "",
  "last_updation_date": "",
  "created_by": "",
  "last_updated_by": "",
  "usertype_id": '',
  }
]

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    // User has entered something in the address bar
    this.onQuery = this.onQuery.bind(this);
    // User has entered something in an address field
    this.onAddressChange = this.onAddressChange.bind(this);
    // User has clicked the check button
    this.onCheck = this.onCheck.bind(this);
    // User has clicked the clear button
    this.onClear = this.onClear.bind(this);
  }

  onQuery(evt) {
    const query = evt.target.value;

    if (!query.length > 0) {
      this.setState(this.getInitialState());
      return;
    }

    const self = this;
    axios.post(SaveAddressApi,
      ).then(function (response) {
          if (response.data.suggestions.length > 0) {
            const id = response.data.suggestions[0].locationId;
            const address = response.data.suggestions[0].address;
            self.setState({
              'address' : address,
              'query' : query,
              'locationId': id
            })
          } else {
            const state = self.getInitialState();
            self.setState(state);
          }
      });
  }
  //"user_id":1,"person_title":1,
  
  getInitialState() {
    return {
      'address': {
        'street': '',
        'city': '',
        'state': '',
        'postalCode': '',
        'country': ''
      },
      'query': '',
      'locationId': '',
      'isChecked': false,
      'coords': {}
    }
  }

  onClear(evt) {
    const state = this.getInitialState();
    this.setState(state);
  }

  onAddressChange(evt) {
    const id = evt.target.id
    const val = evt.target.value

    let state = this.state
    state.address[id] = val;
    this.setState(state);
  }

  onCheck(evt) {
    let params = {
        'app_id': APP_ID_HERE,
        'app_code': APP_CODE_HERE,
    }

    if (this.state.locationId.length > 0) {
      params['locationId'] = this.state.locationId;
    } else {
      params['searchtext'] = this.state.address.street
        + this.state.address.city
        + this.state.address.state
        + this.state.address.postalCode
        + this.state.address.country;
    }

    const self = this;
    axios.post(SaveAddressApi,
      ).then(function (response) {
        const view = response.data.Response.View
        if (view.length > 0 && view[0].Result.length > 0) {
          const location = view[0].Result[0].Location;

          self.setState({
            'isChecked': 'true',
            'locationId': '',
            'query': location.Address.Label,
            'address': {
              'street': location.Address.HouseNumber + ' ' + location.Address.Street,
              'city': location.Address.City,
              'state': location.Address.State,
              'postalCode': location.Address.PostalCode,
              'country': location.Address.Country
            },
            'coords': {
              'lat': location.DisplayPosition.Latitude,
              'lon': location.DisplayPosition.Longitude
            }
          });
        } else {
        //   self.setState(
        //     'isChecked': true,
        //     'coords': null,
        //   )
        }

      })
      .catch(function (error) {
        console.log('caught failed query');
        self.setState({
          'isChecked': true,
          'coords': null,
        });
      });
  }

  alert() {
    if (!this.state.isChecked) {
      return;
    }

    if (this.state.coords === null) {
      return (
        <div className="alert alert-warning" role="alert">
          <b>Invalid.</b> The address is not recognized.
        </div>
      );
    } else {
      return (
        <div className="alert alert-success" role="alert">
          <b>Valid Address.</b>  Location is {this.state.coords.lat}, {this.state.coords.lon}.
        </div>
      );
    }
  }

  render() {
    let result = this.alert();
    return (
        <div >
          <AddressSuggest
            query={this.state.query}
            onChange={this.onQuery}
            />
          <AddressInput
            street={this.state.address.street}
            city={this.state.address.city}
            state={this.state.address.state}
            postalCode={this.state.address.postalCode}
            country={this.state.address.country}
            onChange={this.onAddressChange}
            />
          <br/>
          { result }
          <button type="submit" className="btn btn-primary" style={{backgroundColor: "#007bff", color: "#fff",margin: "2px", borderRadius: "0px 3px 3px 0px"}} onClick={this.onCheck}>Save Address</button>
          <button type="submit" className="btn btn-outline-secondary"style={{borderRadius: "0px 3px 3px 0px", margin: "2px"}} onClick={this.onClear}>Clear</button>
        </div>
      );
  }
}

export default AddressForm;