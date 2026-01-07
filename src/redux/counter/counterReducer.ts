import { INCREMENT, DECREMENT } from "./actionTypes";

const inirialState = {
  value: 0
};

const counterReducer = (state = inirialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state;
  }
};

export default counterReducer;