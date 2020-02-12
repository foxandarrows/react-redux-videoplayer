import { combineReducers } from "redux";
import comments from "./commentReducer";
import counter from "./counterReducer";

const rootReducer = combineReducers({
  comments,
  counter
});

export default rootReducer;
