import { INCREMENT } from "../actions/actionTypes";

const initialSate = {
  counter: 0
};

export default function counterReducer(state = initialSate, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    // case DECREMENT:
    //   return { counter: state.counter - 1 };
    default:
      return state;
  }
}
