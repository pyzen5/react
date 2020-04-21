import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case Types.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
