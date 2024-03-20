import { createAuthor, getAuthors } from "../../services";
import { saveAuthor, setAuthors } from "../slices/authorsSlice";

export const createAuthorThunk = (data) => {
  return async (dispatch) => {
    const res = await createAuthor(data);
    dispatch(saveAuthor(res.result));
  };
};

export const getAuthorsThunk = () => {
  return async (dispatch) => {
    const res = await getAuthors();
    dispatch(setAuthors(res.result));
  };
};
