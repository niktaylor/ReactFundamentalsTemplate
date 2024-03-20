import React from "react";

import styles from "./styles.module.css";

import { Logo } from "./components";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getUserNameSelector } from "../../store/selectors";
import { logoutThunk } from "../../store/thunks/userThunk";

// Module 5:
// *proposed cases for unit tests:
//   ** Header should have logo and user's name.

export const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUserNameSelector);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const logout = () => {
    dispatch(logoutThunk());
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className={styles.headerContainer}>
      <Logo></Logo>
      <div className={styles.userContainer}>
        <p className={styles.userName}>{username}</p>
        {isLoggedIn && <Button buttonText={"Logout"} handleClick={logout} />}
      </div>
    </div>
  );
};
