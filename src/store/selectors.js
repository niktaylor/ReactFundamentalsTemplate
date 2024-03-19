export const getCoursesSelector = (state) => state.courses;
export const getAuthorsSelector = (state) => state.authors;
export const getUserNameSelector = (state) => state.user.name;
export const getUserRoleSelector = (state) => null;
export const getUserTokenSelector = (state) => state.user.token;
export const isAuth = (state) => state.user.isAuth;
export const isAdminSelector = (state) => state.user.role === "admin";
