import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard';
import NavBar from '../../nav/NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashBoard />
        </Container>
      </div>
    );
  }
}
export default App;
