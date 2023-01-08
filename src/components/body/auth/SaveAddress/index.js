import React from 'react'

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    // this is to set the initial state of the component
    this.handleChange = this.handleChange.bind(this)
    // as you probably
    // know, if you're going to be passing functions around and invoke them as
    // callbacks, you'll need to hold onto 'this' because it's bound at runtime
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState() {
    // woohoo, just an object that represents an empty parlor
    return {
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      googleMapLink: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    
    // this is just some redux.
    // just trust that it does what it's supposed to do,
    // send an ajax request to my server
  }

  render() {
    return(
      <div>
        <h3>Address</h3>
        <form onSubmit={this.handleSubmit}>
          <input id="autocomplete"
            className="input-field"
            placeholder={"Full address"}
            ref="input"
            type="text"/>
            <input 
              name={"street_address"}
              value={this.state.street_address}
              placeholder={"Street Address"}
              onChange={this.handleChange}
            />
            <input 
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              onChange={this.handleChange}
            />
            <input
              name={"state"}
              value={this.state.state}
              placeholder={"State"}
              onChange={this.handleChange}
            />
            <input 
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              onChange={this.handleChange}
            />
            {/* <button onSubmit={this.handleSubmit}>Submit</button> */}
        </form>
      </div>
    )
  }

}

export default ParlorForm