import * as Types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      debugger;
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
