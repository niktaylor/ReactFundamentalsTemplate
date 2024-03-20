import { createAuthor, getAuthors } from "../../services";
import { saveAuthor, setAuthors } from "../slices/authorsSlice";

export const createAuthorThunk = (data) => {
  return async (dispatch) => {
    const res = await createAuthor(data);
    dispatch(saveAuthor({ author: res.result }));
  };
};

export const getAuthorsThunk = () => {
  return async (dispatch) => {
    const res = await getAuthors();
    dispatch(setAuthors({ authors: res.result }));
  };
};
