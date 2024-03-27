import { applyMockLocalStorage, mockLocalStorage } from "./test-helpers";
import {
  createAuthor,
  createCourse,
  createUser,
  deleteCourseService,
  getAuthors,
  getCourses,
  getCurrentUser,
  login,
  logout,
  updateCourseService,
} from "./services";

const mockFetchWithReturn = (ret) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: jest.fn(() => Promise.resolve(ret)),
    })
  );
};

const url = "http://localhost:4000";
const headers = (token) => ({
  "Content-Type": "application/json",
  ...(token ? { Authorization: "token" } : {}),
});

describe("services", () => {
  beforeEach(() => {
    mockLocalStorage.getItem.mockReturnValue("token");
    applyMockLocalStorage();
  });

  it("#createUser", async () => {
    const user = { id: "0" };
    mockFetchWithReturn(user);
    const res = await createUser(user);
    expect(res).toEqual(user);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/register`, {
      method: "POST",
      headers: headers(false),
      body: JSON.stringify(user),
    });
  });

  it("#login", async () => {
    const user = { id: "0" };
    mockFetchWithReturn(user);
    const res = await login(user);
    expect(res).toEqual(user);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/login`, {
      method: "POST",
      headers: headers(false),
      body: JSON.stringify(user),
    });
  });

  it("#getCourses", async () => {
    mockFetchWithReturn([]);
    const res = await getCourses();
    expect(res).toEqual([]);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/courses/all`, {
      method: "GET",
      headers: headers(false),
    });
  });

  it("#getAuthors", async () => {
    mockFetchWithReturn([]);
    const res = await getAuthors();
    expect(res).toEqual([]);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/authors/all`, {
      method: "GET",
      headers: headers(false),
    });
  });

  it("#getCurrentUser", async () => {
    const user = { id: "0" };
    mockFetchWithReturn(user);
    const res = await getCurrentUser();
    expect(res).toEqual(user);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/users/me`, {
      method: "GET",
      headers: headers(true),
    });
  });

  it("#updateCourseService", async () => {
    const course = {
      id: "0",
      title: "title",
      description: "description",
      duration: 4,
      authors: [],
    };
    mockFetchWithReturn(course);
    const res = await updateCourseService(course);
    expect(res).toEqual(course);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/courses/0`, {
      method: "PUT",
      headers: headers(true),
      body: JSON.stringify({
        title: "title",
        description: "description",
        duration: 4,
        authors: [],
      }),
    });
  });

  it("#logout", async () => {
    global.fetch = jest.fn(() => Promise.resolve());
    await logout();
    expect(global.fetch).toHaveBeenCalledWith(`${url}/logout`, {
      method: "DELETE",
      headers: headers(false),
    });
  });

  it("#deleteCourseService", async () => {
    const id = "0";
    mockFetchWithReturn(id);
    const res = await deleteCourseService(id);
    expect(res).toEqual(id);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/courses/0`, {
      method: "DELETE",
      headers: headers(true),
    });
  });

  it("#createCourse", async () => {
    const course = { id: "0" };
    mockFetchWithReturn(course);
    const res = await createCourse(course);
    expect(res).toEqual(course);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/courses/add`, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(course),
    });
  });

  it("#createAuthor", async () => {
    const user = { id: "0" };
    mockFetchWithReturn(user);
    const res = await createAuthor(user);
    expect(res).toEqual(user);
    expect(global.fetch).toHaveBeenCalledWith(`${url}/authors/add`, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(user),
    });
  });
});
