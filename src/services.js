const root = "http://localhost:4000";

const getHeaders = (auth, token) => {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    headers["Authorization"] = token ?? localStorage.getItem("token");
  }
  return headers;
};

export const createUser = async (data) => {
  const res = await fetch(`${root}/register`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const login = async (data) => {
  const res = await fetch(`${root}/login`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getCourses = async () => {
  const res = await fetch(`${root}/courses/all`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await res.json();
};

export const getAuthors = async () => {
  const res = await fetch(`${root}/authors/all`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await res.json();
};

export const getCurrentUser = async (token) => {
  const res = await fetch(`${root}/users/me`, {
    method: "GET",
    headers: getHeaders(true, token),
  });
  return await res.json();
};

export const updateCourseService = async (data, token) => {
  const id = data.id;
  delete data.id;
  const res = await fetch(`${root}/courses/${id}`, {
    method: "PUT",
    headers: getHeaders(true, token),
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const logout = async () => {
  return await fetch(`${root}/`, {
    method: "DELETE",
    headers: getHeaders(),
  });
};

export const deleteCourseService = async (id, token) => {
  const res = await fetch(`${root}/courses/${id}`, {
    method: "DELETE",
    headers: getHeaders(true, token),
  });
  return await res.json();
};

export const createCourse = async (data, token) => {
  const res = await fetch(`${root}/courses/add`, {
    method: "POST",
    headers: getHeaders(true, token),
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const createAuthor = async (data, token) => {
  const res = await fetch(`${root}/authors/add`, {
    method: "POST",
    headers: getHeaders(true, token),
    body: JSON.stringify(data),
  });
  return await res.json();
};
