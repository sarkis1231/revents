import React from 'react';
import {connect} from 'react-redux';
import {Login} from '../AuthActions';
import {Form, Segment, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';

const LoginForm = ({Login, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(Login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  {Login}
)(reduxForm({form: 'loginForm'})(LoginForm));
