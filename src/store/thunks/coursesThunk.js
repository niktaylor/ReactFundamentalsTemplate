import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";
import {
  deleteCourse,
  saveCourse,
  setCourses,
  updateCourse,
} from "../slices/coursesSlice";

export const updateCourseThunk = (data) => {
  return async (dispatch) => {
    const res = await updateCourseService(data);
    if (res.successful) {
      dispatch(updateCourse({ course: res.result }));
    }
  };
};

export const deleteCourseThunk = (id) => {
  return async (dispatch) => {
    const res = await deleteCourseService(id);
    if (res.successful) {
      dispatch(deleteCourse({ id }));
    }
  };
};

export const createCourseThunk = (data) => {
  return async (dispatch) => {
    const res = await createCourse(data);
    if (res.successful) {
      dispatch(saveCourse({ course: res.result }));
    }
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    const res = await getCourses();
    if (res.successful) {
      dispatch(setCourses({ courses: res.result }));
    }
  };
};
