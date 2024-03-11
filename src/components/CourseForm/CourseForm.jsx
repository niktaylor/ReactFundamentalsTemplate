// Module 3.
// * save new course to the store. Use action 'saveCourse' from 'src/store/slices/coursesSlice'
// * save new author to the store. Use action 'saveAuthor' from 'src/store/slices/authorsSlice'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#add-new-course

// Module 4.
// * render this component only for ADMIN user
// * in this module you should separate functionality for this component:
//   ** create mode:
//     * form for the course creation should be opened by 'courses/add' route by 'ADD NEW COURSE' button click (as before)
//     * make a request to save new course
//     * use 'createCourse' service from 'src/services.js' and 'createCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     * use 'createAuthor ' service from 'src/services.js' and 'createAuthorThunk' thunk from 'src/store/thinks/authorsThunk.js'
//     * save new course to the store after success response
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#add-new-course
//   ** update mode:
//     * form should be opened by route '/courses/update/:courseId' route by 'update' button click
//     * appropriate forms field should be prefilled with course's info
//     * user should have ability to modify course information in the fields and change authors list
//     * make a request to save updated course
//     * use 'updateCourseService' from 'src/services.js' and 'updateCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     save updated course to the store after success response.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#update-course

// Module 5:
// * proposed cases for unit tests:
//   ** CourseForm should show authors lists (all and course authors).
//   **  CourseForm 'Create author' button click should call dispatch.
//   **  CourseForm 'Add author' button click should add an author to the course authors list.
//   **  CourseForm 'Delete author' button click should delete an author from the course list.

import React, { useState } from "react";

import styles from "./styles.module.css";
import { Input, Button } from "../../common";
import { getCourseDuration } from "../../helpers/getCourseDuration";
import { AuthorItem, CreateAuthor } from "./components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getAuthorsSelector } from "../../store/selectors";
import { saveAuthor } from "../../store/slices/authorsSlice";
import { saveCourse } from "../../store/slices/coursesSlice";

const unique = (value, index, array) => array.indexOf(value) === index;

export const CourseForm = () => {
  const dispatch = useDispatch();
  const authorsList = useSelector(getAuthorsSelector);
  const navigate = useNavigate();
  const [course, setCourse] = useState({});
  const [errors, setErrors] = useState({});
  const [nextId, setNextId] = useState(0);

  const saveNewAuthor = (newAuthor) => {
    dispatch(saveAuthor({ author: newAuthor }));
  };
  const createCourse = (course) => {
    dispatch(saveCourse({ course }));
  };

  const updateForm = (field) => {
    return (event) => {
      event.preventDefault();
      setErrors({
        ...errors,
        [field]: undefined,
      });
      setCourse({
        ...course,
        [field]: event.target.value,
      });
    };
  };
  const addAuthor = (author, event) => {
    event.preventDefault();
    setCourse((course) => ({
      ...course,
      authors: [...(course.authors ?? []), author].filter(unique),
    }));
  };
  const removeAuthor = (author, event) => {
    event.preventDefault();
    setCourse((course) => ({
      ...course,
      authors: course.authors.filter(({ id }) => id !== author.id),
    }));
  };
  const validateCourse = (course) => {
    const errorMessages = {
      title: !course.title || course.title?.length < 2 ? "Title Required" : "",
      description:
        !course.description || course.description?.length < 2
          ? "Description Required"
          : "",
      duration:
        !course.duration || course.duration?.length < 1
          ? "Duration Required"
          : "",
      authors:
        !course.authors || course.authors?.length < 1 ? "Authors Required" : "",
    };
    setErrors(errorMessages);

    return Object.values(errorMessages).filter((e) => e?.length).length;
  };
  const cancel = () => {
    navigate("/courses");
  };
  const submitCourse = () => {
    const errorCount = validateCourse(course);
    if (errorCount === 0) {
      createCourse({
        ...course,
        authors: course.authors.map(({ id }) => id),
        creationDate: "05/03/2024",
        id: `${nextId}`,
      });
      setNextId((id) => id + 1);
      navigate("/courses");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Course edit/Create page</h2>
      <form>
        <Input
          labelText="Title"
          placeholderText="Input Text"
          data-testid="titleInput"
          error={errors.title}
          onChange={updateForm("title")}
        ></Input>
        <label>
          Description
          <textarea
            className={styles.description}
            minLength={2}
            data-testid="descriptionTextArea"
            onChange={updateForm("description")}
          />
          <label className="error">{errors?.description}</label>
        </label>
        <div className={styles.infoWrapper}>
          <div>
            <div className={styles.duration}>
              <Input
                labelText="Duration"
                placeholderText="Input Text"
                error={errors.duration}
                data-testid="durationInput"
                onChange={updateForm("duration")}
              ></Input>
              <p>{getCourseDuration(course?.duration ?? 0)}</p>
            </div>
            <h2>Authors</h2>
            <CreateAuthor onCreateAuthor={saveNewAuthor} />
            <div className={styles.authorsContainer}>
              <h3>Authors List</h3>
              {authorsList?.map((author) => (
                <AuthorItem
                  mode="add"
                  author={author}
                  key={author.id}
                  handleClick={(event) => addAuthor(author, event)}
                />
              ))}
            </div>
          </div>
          <div className={styles.courseAuthorsContainer}>
            <h2>Course authors</h2>
            <label className="error">{errors?.authors}</label>
            {course?.authors?.map((author) => (
              <AuthorItem
                author={author}
                key={author.id}
                handleClick={(event) => removeAuthor(author, event)}
              />
            ))}
            {!course?.authors?.length && (
              <p className={styles.notification}>List is empty</p>
            )}
          </div>
        </div>
      </form>
      <div className={styles.buttonsContainer}>
        <Button buttonText="CANCEL" handleClick={cancel} />
        <Button
          buttonText="CREATE COURSE"
          data-testid="createCourseButton"
          handleClick={submitCourse}
        />
      </div>
    </div>
  );
};
