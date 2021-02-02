import { ADDITION } from "../constants/actionsTypes";

const intialState = {
  sum: 0,
};

const reducerAddition = (state = intialState, action) => {
  if (action.type === ADDITION) {
    return { ...state, sum: action.val1 + action.val2 };
  } else {
    return state;
  }
};

export default reducerAddition
