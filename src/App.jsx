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
} from "./components";
import { isAuth } from "./store/selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAuthors, getCourses } from "./services";
import { setAuthors } from "./store/slices/authorsSlice";
import { setCourses } from "./store/slices/coursesSlice";

// Module 3:
// * wrap your App with Redux Provider in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuth);

  useEffect(() => {
    getAuthors().then((res) => {
      if (res?.successful) {
        dispatch(setAuthors({ authors: res.result }));
      }
    });
    getCourses().then((res) => {
      if (res?.successful) {
        dispatch(setCourses({ courses: res.result }));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="courses/add"
          element={
            <>
              <Header />
              <CourseForm />
            </>
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
