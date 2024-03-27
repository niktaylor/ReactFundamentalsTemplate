import { authorsSlice, saveAuthor, setAuthors } from "./authorsSlice";
import {
  coursesSlice,
  setCourses,
  saveCourse,
  deleteCourse,
  updateCourse,
} from "./coursesSlice";
import { userSlice, setUserData, removeUserData } from "./userSlice";
import { mockedState } from "../../test-helpers";

describe("authorsSlice", () => {
  it("#setAuthors", () => {
    const action = setAuthors([{ id: "0" }]);
    expect(authorsSlice.reducer(mockedState.authors, action)).toEqual([
      { id: "0" },
    ]);
  });
  it("#saveAuthor", () => {
    const action = saveAuthor({ id: "0" });
    const state = authorsSlice.reducer(mockedState.authors, action);
    expect(state).toEqual([...mockedState.authors, { id: "0" }]);
  });
});

describe("coursesSlice", () => {
  it("#setCourses", () => {
    const action = setCourses([{ id: "0" }]);
    expect(coursesSlice.reducer(mockedState.courses, action)).toEqual([
      { id: "0" },
    ]);
  });

  it("#saveCourses", () => {
    const action = saveCourse({ id: "0" });
    expect(coursesSlice.reducer(mockedState.courses, action)).toEqual([
      ...mockedState.courses,
      { id: "0" },
    ]);
  });

  it("#deleteCourse", () => {
    const action = deleteCourse(mockedState.courses[0].id);
    expect(coursesSlice.reducer(mockedState.courses, action)).toEqual([]);
  });

  it("#updateCourse", () => {
    const updatedCourse = {
      ...mockedState.courses[0],
      duration: 15,
      title: "Updated",
    };
    const action = updateCourse(updatedCourse);
    expect(coursesSlice.reducer(mockedState.courses, action)).toEqual([
      updatedCourse,
    ]);
  });
});

describe("userSlice", () => {
  it("#setUserData", () => {
    const user = {
      name: "name",
      email: "name@email.com",
      token: "token",
      role: "",
    };
    const action = setUserData(user);
    expect(userSlice.reducer(mockedState.user, action)).toEqual({
      ...user,
      isAuth: true,
    });
  });
  it("#removeUserData", () => {
    const action = removeUserData();
    expect(userSlice.reducer(mockedState.user, action)).toEqual({
      isAuth: false,
      name: "",
      email: "",
      token: null,
      role: "",
    });
  });
});
