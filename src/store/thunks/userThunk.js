import { getCurrentUser, logout } from "../../services";
import { removeUserData, setUserData } from "../slices/userSlice";

export const getUserThunk = () => {
  return async (dispatch) => {
    const res = await getCurrentUser();
    dispatch(setUserData(res.result));
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    await logout();
    dispatch(removeUserData());
  };
};
