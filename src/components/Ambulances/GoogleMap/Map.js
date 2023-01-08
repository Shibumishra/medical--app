import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from "react-google-maps";
import { CssBaseline, Grid } from '@material-ui/core';
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
import { AiFillPhone } from 'react-icons/ai';
Geocode.setApiKey("AIzaSyC9mxZ7IdcEup9vC5on0sXx");
Geocode.enableDebug();
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      area: "",
      state: "",
      isLoggedIn: false,
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      }
    };
  }
  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount() {
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        console.log("city", city, area, state);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          aptTime: " ",
          aptDate: " ",
          user: false
        });
      },
      error => {
        console.error(error);
      }
    );
  }
  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }
  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getCity = addressArray => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };
  /**
   * Get the area and set the area input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getArea = addressArray => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getState = addressArray => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };
  /**
   * And function for city,state and address input
   * @param event
   */
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
  };
  onSubmit = (e) => {
    e.preventDefault();
    let tempApt = {
      pickupLocation: this.state.city,
      dropLocation: this.state.area,
      bookDate: this.state.aptDate,
      bookTime: this.state.aptTime,
    };
    this.setState({ [this.state.user]: false });
    console.log(tempApt)
  }
  /**
   * This Event triggers when the marker window is closed
   *
   * @param event
   */
  onInfoWindowClose = event => { };
  /**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = place => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      }
    });
  };
  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = event => {
    console.log("event", event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng(),
      addressArray = [];
    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          aptTime: " ",
          aptDate: " ",
          user: false
        });
      },
      error => {
        console.error(error);
      }
    );
  };
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }}
        >
          {/* For Auto complete Search Box */}
          <div className="pickup-location-input">
            <div className="form-group">
              <label htmlFor="">Select Pickup Location</label>
              <Autocomplete
                className="form-control"
                style={{
                  height: "40px",
                  paddingLeft: "16px",
                  marginTop: "2px",
                  marginBottom: "1px",
                  borderRadius: '5px'
                }}
                onPlaceSelected={this.onPlaceSelected}
                types={["(regions)"]}
                placeholder="Enater a Location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Select Drop Location</label>
              <Autocomplete
                className="form-control"
                style={{
                  height: "40px",
                  paddingLeft: "16px",
                  marginTop: "2px",
                  marginBottom: "1px",
                  borderRadius: '5px'
                }}
                onPlaceSelected={this.onPlaceSelected}
                types={["(regions)"]}
                placeholder="Enater a Location"
              />
            </div>
          </div>
          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            averageCenter
            enableRetinaIcons
            gridSize={60}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          />
          <Marker />
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            averageCenter
            enableRetinaIcons
            gridSize={60}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          />
          <Marker />
          {/* InfoWindow on top of marker */}
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
        </GoogleMap>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div style={{ marginTop: '130px' }} className="maps-position">
          <h1 className='book-ambulances'>Book An Ambulance</h1>
          <div className='book-ambulances-text'>
            <h2>Fare Estimation</h2>
            <h5>Know it before you commit. Our RED Ambulances commits to fair and standardized pricing. In an industry known for situation-based pricing - we believe in patient-first approach to everything we do.</h5>
            <h5>Our experts shall assist you with add-ons if needed for your request so that you just pay for what you use.</h5>
          </div>
          <div className="booking-now_container">
            <Grid container spacing={1} style={{ width: '100%' }}>
              <Grid item xs={12} md={5}>
                <div className="booking-now_container-inputs">
                  {/* <div className="form-group" style={{marginTop: '30px'}}>
                 <label htmlFor="">Select Pickup Location</label>
                 <input
                   type="text"
                   name="city"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.city}
                   placeholder="Enater a Location"
                   required
                 />
               </div> */}
                  {/* <div className="form-group">
                 <label htmlFor="">Select Drop Location</label>
                 <input
                   type="text"
                   name="area"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.area}
                   placeholder="Enater a Location"
                   required
                 />
               </div> */}
                  <div className="form-group" style={{ marginTop: "185px" }}>
                    <div >
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="aptDate"
                        id="aptDate"
                        value={this.state.aptDate}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="aptTime"
                        id="aptTime"
                        value={this.state.aptTime}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="form-group">
           <label htmlFor="">State</label>
           <input
             type="text"
             name="state"
             className="form-control"
             onChange={this.onChange}
             readOnly="readOnly"
             value={this.state.state}
           />
         </div>
         <div className="form-group">
           <label htmlFor="">Address</label>
           <input
             type="text"
             name="address"
             className="form-control"
             onChange={this.onChange}
             readOnly="readOnly"
             value={this.state.address}
           />
         </div> */}
                </div>
              </Grid>
              <Grid item xs={12} md={7} className="google-map">
                <AsyncMap
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9mxZ7IdcEup9vC5on0sXx-PpMnSo9Gwc&libraries=places&callback=onMapsLoad"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: this.props.height }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Grid>
            </Grid>

            <div className='input-modal-box'>
              <div>
                <button onClick={this.onSubmit} _ngcontent-ucy-c205="" className="search-ambulance-button w-85 mt-0 mb-2 ng-tns-c205-18 ng-star-inserted"> Sumbit </button>
              </div>
              <div>
                <button className="search-ambulance-button">
                  <AiFillPhone /> +0123456789
                </button>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default Map;