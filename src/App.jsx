import React, { useState } from "react";

import styles from "./App.module.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import {
  Registration,
  Login,
  Courses,
  CourseInfo,
  CourseForm,
  Header,
} from "./components";

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * wrap your App with BrowserRouter in src/index.js
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

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
  const [courses, setCourses] = useState(mockedCoursesList);
  const [authors, setAuthors] = useState(mockedAuthorsList);

  const isLoggedIn = !!localStorage.getItem("token");

  const addCourse = (course) => {
    setCourses((courses) => [...courses, course]);
  };
  const addAuthor = (author) => {
    setAuthors((authors) => [...authors, author]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="courses/add"
            element={
              <>
                <Header />
                <CourseForm
                  authorsList={authors}
                  createCourse={addCourse}
                  createAuthor={addAuthor}
                />
              </>
            }
          />
          <Route
            path="courses/:id"
            element={
              <>
                <Header />
                <CourseInfo authorsList={authors} coursesList={courses} />
              </>
            }
          />
          <Route
            path="courses"
            element={
              <>
                <Header />
                <Courses authorsList={authors} coursesList={courses} />
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
      </BrowserRouter>
      <div className={styles.wrapper}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
