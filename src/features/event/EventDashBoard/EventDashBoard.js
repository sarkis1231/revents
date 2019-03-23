import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {deleteEvent} from '../eventActions';
import EventList from '../EventList/EventList';

class EventDashBoard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={this.props.events}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(
  mapStateToProps,
  {deleteEvent}
)(EventDashBoard);
