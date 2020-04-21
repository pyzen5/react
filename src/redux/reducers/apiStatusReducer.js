import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsinSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type == Types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type == Types.API_CALL_ERROR ||
    actionTypeEndsinSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
