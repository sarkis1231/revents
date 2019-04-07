import React, {Component} from 'react';
import {Form, Label} from 'semantic-ui-react';
import Script from 'react-load-script';
import PlaceAutocomplete from 'react-places-autocomplete';
class PlaceInput extends Component {
  state = {
    scriptLaoded: false,
  };

  handleScriptLaoded = () => {
    this.setState({scriptLaoded: true});
  };

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: {touched, error},
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkauYqD-CBnVqKGJ35m7vbqqftFx-1-z4&libraries=places"
          onLoad={this.handleScriptLaoded}
        />
        {this.state.scriptLaoded && (
          <PlaceAutocomplete
            inputProps={{...input, placeholder}}
            options={options}
            onSelect={onSelect}
          />
        )}
        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
