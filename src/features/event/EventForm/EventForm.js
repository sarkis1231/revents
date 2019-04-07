import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from 'revalidate';
import cuid from 'cuid';
import {Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import {createEvent, updateEvent} from '../eventActions';
import {compose} from 'redux';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {
  onFormSubmit = formValues => {
    console.log(formValues);
    if (this.props.initialValues.id) {
      this.props.updateEvent(formValues);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...formValues,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob',
      };
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };

  render() {
    const {invalid, submiting, pristine} = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your event about"
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={TextArea}
                options={{types: ['(cities']}}
                placeholder="Event City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />

              <Field
                name="date"
                component={DateInput}
                showTimeSelect
                placeholder="Date and Time of event"
                autoComplete="off"
              />

              <Button
                positive
                type="submit"
                disabled={invalid || submiting || pristine}
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event,
  };
};
const actions = {
  createEvent,
  updateEvent,
};

const validate = combineValidators({
  title: isRequired({message: 'The event is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters',
    })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date'),
});

const enhance = compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    form: 'eventForm',
    enableReinitialize: true,
    validate,
  })
);

export default enhance(EventForm);
