import * as Types from "./actionTypes";

export function createCourse(course) {
  // action creator
  return { type: Types.CREATE_COURSE, course }; //action
}

// object short hand syntax course: course => course
