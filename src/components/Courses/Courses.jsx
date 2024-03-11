import React from "react";

import styles from "./styles.module.css";
import { CourseCard, EmptyCourseList } from "./components";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";

// Module 2:
// * render this component by route '/courses'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking Add New Course button.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#courses

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store. Use selectors...
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#courses-component

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#emptycourselist-component

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses = ({ coursesList, authorsList }) => {
  const navigate = useNavigate();

  const emptyCourseList = (
    <EmptyCourseList
      handleAddCourse={() => navigate("/courses/add")}
    ></EmptyCourseList>
  );
  const courseList = coursesList?.map((course) => (
    <CourseCard
      key={course.id}
      course={course}
      authorsList={authorsList}
      handleShowCourse={(event) => navigate(`/courses/${event}`)}
    ></CourseCard>
  ));
  return (
    <>
      <div className={styles.panel}>
        <Button
          buttonText="ADD NEW COURSE"
          handleClick={() => navigate("/courses/add")}
          data-testid="addCourse"
        ></Button>
      </div>
      {coursesList?.length ? courseList : emptyCourseList}
    </>
  );
};
