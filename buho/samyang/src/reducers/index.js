import { combineReducers } from "redux";
import dealerReducer from "./dealerReducer";

export default combineReducers({
  dealer: dealerReducer,
});
