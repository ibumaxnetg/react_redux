import { combineReducers } from "redux";

import number from "./number";
import title from "./title";
import days from "./days";

export default combineReducers({
  number,
  title,
  days
});
