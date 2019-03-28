import React from 'react';
import DatePicker from 'react-datepicker';
import {Form, Label} from 'semantic-ui-react';

import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Sako extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      input,
      width,
      placeholder,
      meta: {touched, error},
      ...rest
    } = this.props;
    console.log(input.value);
    return (
      <Form.Field error={touched && !!error} width={width}>
        <DatePicker
          {...rest}
          selected={input.value ? moment(input.value) : null}
          onChange={input.onChange}
          placeholder={placeholder}
        />
        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}
export default Sako;
