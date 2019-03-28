import React from 'react';
import {Form, Label} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
const DateInput = ({
  input,
  width,
  placeholder,
  type,
  meta: {touched, error},
  ...rest
}) => {
  console.log(input.value);
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...input}
        {...rest}
        value={
          input.value ? moment(input.value).format('YYYY-MM-DD HH:mm') : null
        }
        placeholderText={placeholder}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
