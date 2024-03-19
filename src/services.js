const root = "http://localhost:4000";
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token"), // ?.replace("Bearer ", ""),
});

const post = async (url, data) => {
  const response = await fetch(`${root}/${url}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return await response.json();
};

const get = async (url) => {
  const response = await fetch(`${root}/${url}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await response.json();
};

const remove = async (url, json = true) => {
  const response = await fetch(`${root}/${url}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  return json ? await response.json() : response;
};

const put = async (url, data) => {
  const response = await fetch(`${root}/${url}`, {
    method: "PUT",
    headers: getHeaders(),
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
  return get("users/me");
};

export const updateCourseService = async (data) => {
  return put(`courses/${data.id}`, data);
};

export const logout = async () => {
  return remove("logout", false);
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
