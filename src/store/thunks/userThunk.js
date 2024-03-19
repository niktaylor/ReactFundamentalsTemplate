import { getCurrentUser, logout } from "../../services";
import { removeUserData, setUserData } from "../slices/userSlice";

export const getUserThunk = () => {
  return async (dispatch) => {
    const res = await getCurrentUser();
    if (res.successful) {
      dispatch(setUserData(res.result));
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    const res = await logout();
    if (res.ok) {
      dispatch(removeUserData());
    }
  };
};
