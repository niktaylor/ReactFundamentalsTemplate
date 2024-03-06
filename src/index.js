import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Registration,
  Login,
  Courses,
  CourseInfo,
  CourseForm,
} from "./components";

import { mockedAuthorsList, mockedCoursesList } from "./constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

const authorsList = [...mockedAuthorsList];
const coursesList = [...mockedCoursesList];

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="courses/add"
          element={
            <CourseForm
              authorsList={authorsList}
              createCourse={(course) => coursesList.push(course)}
              createAuthor={(author) => authorsList.push(author)}
            />
          }
        />
        <Route
          path="courses/:id"
          element={
            <CourseInfo authorsList={authorsList} coursesList={coursesList} />
          }
        />
        <Route
          path="courses"
          element={
            <Courses authorsList={authorsList} coursesList={coursesList} />
          }
        />
      </Route>
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
