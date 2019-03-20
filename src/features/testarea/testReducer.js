import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './tetsConstants';

const initialState = {
  data: 42,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, data: state.data + 1};
    case DECREMENT_COUNTER:
      return {...state, data: state.data - 1};
    default:
      return state;
  }
};

export default testReducer;
