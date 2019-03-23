import React from 'react';
import {Segment, List, Label, Item} from 'semantic-ui-react';
const EventDetailedSlidebar = ({attendees}) => {
  const isHost = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{border: 'none'}}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{' '}
        {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item.Group key={attendee.id} style={{position: 'relative'}}>
                <Item>
                  {isHost && (
                    <Label
                      style={{position: 'absolute'}}
                      color="orange"
                      ribbon="right"
                    >
                      Host
                    </Label>
                  )}
                  <Item.Image size="tiny" src={attendee.photoURL} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                      <a href="sako">{attendee.name}</a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailedSlidebar;
