import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {incrementCounter, decrementCounter} from './testActions';
import {openModal} from '../modals/modalActions';
// import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
// import TestMap from './TestMap';
class TestComponent extends Component {
  state = {
    address: '',
    scriptLoaded: false,
  };

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true});
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleChange = address => {
    this.setState({address});
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    const {incrementCounter, decrementCounter, data, openModal} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button onClick={incrementCounter} content="Increment" color="green" />
        <Button onClick={decrementCounter} content="Decrement" color="red" />
        <Button
          onClick={() => openModal('TestModal', {data: 42})}
          content="Open Modal"
          color="teal"
        />
        <br /> <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            />
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.test.data,
});

export default connect(
  mapStateToProps,
  {incrementCounter, decrementCounter, openModal}
)(TestComponent);
