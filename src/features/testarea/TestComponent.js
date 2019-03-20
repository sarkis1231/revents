import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {incrementCounter, decrementCounter} from './testActions';
class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button onClick={incrementCounter} content="Increment" color="green" />
        <Button onClick={decrementCounter} content="Decrement" color="red" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.test.data,
});
export default connect(
  mapStateToProps,
  {incrementCounter, decrementCounter}
)(TestComponent);
