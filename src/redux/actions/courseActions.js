import * as Types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  // action creator
  return { type: Types.CREATE_COURSE, course }; //action
}

export function loadCourseSuccess(courses) {
  return { type: Types.LOAD_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
// object short hand syntax course: course => course
