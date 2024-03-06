const root = "http://localhost:4000";
const post = async (url, data) => {
  const response = await fetch(`${root}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const createUser = async (data) => {
  return await post("register", data);
};

export const login = async (data) => {
  return await post("login", data);
};

export const getCourses = async () => {
  // write your code here
};

export const getAuthors = async () => {
  // write your code here
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourseService = async () => {
  // write your code here
};

export const logout = async () => {
  // write your code here
};

export const deleteCourseService = async () => {
  // write your code here
};

export const createCourse = async () => {
  // write your code here
};

export const createAuthor = async () => {
  // write your code here
};
