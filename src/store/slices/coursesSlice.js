import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => [...payload.courses],
    saveCourse: (state, { payload }) => [...state, payload.course],
    deleteCourse: (state, { payload }) =>
      state.filter((course) => course.id !== payload.course.id),
    updateCourse: (state, { payload }) =>
      state.map((course) =>
        course.id === payload.course.id ? payload : course
      ),
  },
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
