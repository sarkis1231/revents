import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard';
import NavBar from '../../nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashBoard';
import UserDetailedPage from '../../features/user/UserDetialed/USerDetailedPage';
import PeopleDasheBoard from '../../features/user/PeopleDashbaord/PeopleDashBoard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashBoard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDasheBoard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
