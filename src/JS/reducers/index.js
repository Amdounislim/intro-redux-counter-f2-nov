import reducerCounter from "./reducerCounter";
import reducerShow from "./reducerShow";
import reducerAddition from "./reducerAddition";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducerCounter: reducerCounter,
  reducerShow: reducerShow,
  reducerAddition: reducerAddition,
});

export default rootReducer;
