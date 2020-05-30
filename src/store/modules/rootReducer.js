import { combineReducers } from "redux";

import cart from "./cart/redurcer";
import change from "./change/redurcer";

export default combineReducers({
  cart,
  change,
});
