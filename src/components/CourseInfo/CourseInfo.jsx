// This component shows information about the current chosen course.

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.js to get coursesList, authorsList from store

import React from "react";

import { formatCreationDate, getCourseDuration } from "../../helpers";

import styles from "./styles.module.css";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthorsSelector, getCoursesSelector } from "../../store/selectors";

export const CourseInfo = () => {
  const authorsList = useSelector(getAuthorsSelector);
  const coursesList = useSelector(getCoursesSelector);
  const params = useParams();
  const courseId = params.id;

  const course = coursesList?.find(({ id }) => id === courseId);
  const courseAuthors =
    course?.authors?.map(
      (authorId) => authorsList?.find(({ id }) => id === authorId)?.name
    ) ?? [];
  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{course?.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{course?.description}</p>
        <div>
          <p>
            <b>ID: </b>
            {course?.id}
          </p>
          <p>
            <b>Duration: </b>
            {getCourseDuration(course?.duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(course?.creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {courseAuthors?.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link to="/courses">BACK</Link>
    </div>
  );
};
