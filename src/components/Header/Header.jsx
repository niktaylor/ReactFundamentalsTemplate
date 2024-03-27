import React from "react";

import styles from "./styles.module.css";

import { Logo } from "./components";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserNameSelector } from "../../store/selectors";
import { logoutThunk } from "../../store/thunks/userThunk";

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
