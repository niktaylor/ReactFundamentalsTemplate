import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => [...payload],
    saveCourse: (state, { payload }) => [...state, payload],
    deleteCourse: (state, { payload }) =>
      state.filter((course) => course.id !== payload),
    updateCourse: (state, { payload }) =>
      state.map((course) => (course.id === payload.id ? payload : course)),
  },
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
