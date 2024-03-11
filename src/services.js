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

const get = async (url) => {
  const response = await fetch(`${root}/${url}`);
  return await response.json();
};

const remove = async (url) => {
  const response = await fetch(`${root}/${url}`, {
    method: "DELETE",
  });
  return await response.json();
};

const put = async (url, data) => {
  const response = await fetch(`${root}/${url}`, {
    method: "PUT",
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
  return get("courses/all");
};

export const getAuthors = async () => {
  return get("authors/all");
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourseService = async (data) => {
  return put(`courses/${data.id}`, data);
};

export const logout = async () => {
  // write your code here
};

export const deleteCourseService = async (id) => {
  return remove(`courses/${id}`);
};

export const createCourse = async (data) => {
  return post("courses/add", data);
};

export const createAuthor = async (data) => {
  return post("authors/add", data);
};
