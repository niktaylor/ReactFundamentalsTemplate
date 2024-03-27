import React, { useEffect } from "react";

import styles from "./App.module.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
  Registration,
  Login,
  Courses,
  CourseInfo,
  CourseForm,
  Header,
  PrivateRoute,
} from "./components";
import { getUserTokenSelector, isAuth } from "./store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getAuthorsThunk } from "./store/thunks/authorsThunk";
import { getCoursesThunk } from "./store/thunks/coursesThunk";
import { getUserThunk } from "./store/thunks/userThunk";

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuth);

  useEffect(() => {
    dispatch(getAuthorsThunk());
    dispatch(getCoursesThunk());
  }, [dispatch]);

  const hasPreviousLogin = useSelector(getUserTokenSelector);
  useEffect(() => {
    if (hasPreviousLogin) {
      dispatch(getUserThunk());
    }
  }, [dispatch, hasPreviousLogin]);

  return (
    <>
      <Routes>
        <Route
          path="courses/add"
          element={
            <PrivateRoute>
              <Header />
              <CourseForm />
            </PrivateRoute>
          }
        />
        <Route
          path="courses/update/:id"
          element={
            <PrivateRoute>
              <Header />
              <CourseForm />
            </PrivateRoute>
          }
        />
        <Route
          path="courses/:id"
          element={
            <>
              <Header />
              <CourseInfo />
            </>
          }
        />
        <Route
          path="courses"
          element={
            <>
              <Header />
              <Courses />
            </>
          }
        />
        <Route
          path="registration"
          element={
            <>
              <Header />
              <Registration />
            </>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/courses" : "/login"} />}
        />
      </Routes>
      <div className={styles.wrapper}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
