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
    dispatch(updateCourse({ course: res.result }));
  };
};

export const deleteCourseThunk = (id) => {
  return async (dispatch) => {
    await deleteCourseService(id);
    dispatch(deleteCourse({ id }));
  };
};

export const createCourseThunk = (data) => {
  return async (dispatch) => {
    const res = await createCourse(data);
    dispatch(saveCourse({ course: res.result }));
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    const res = await getCourses();
    dispatch(setCourses({ courses: res.result }));
  };
};
