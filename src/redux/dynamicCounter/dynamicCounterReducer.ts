import { DINCREMENT, DDECREMENT } from "./actionTypes";

const inirialState = {
  value: 0
};

const dynamicCounterReducer = (state = inirialState, action: any) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state;
  }
};

export default dynamicCounterReducer;