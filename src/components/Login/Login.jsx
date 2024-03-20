import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { login } from "../../services";
import { Button, Input } from "../../common";
import { useDispatch } from "react-redux/es/exports";
import { setUserData } from "../../store/slices/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?.email && user?.password) {
      login(user).then((res) => {
        if (res?.successful) {
          dispatch(
            setUserData({
              name: res.user.name,
              email: res.user.email,
              token: res.result,
            })
          );
          localStorage.setItem("token", res?.result);
          navigate("/courses");
        } else {
          setErrors({
            ...errors,
            form: res?.errors?.join(",\n"),
          });
        }
      });
    } else {
      setErrors({
        email: !user?.email ? "Email is required" : "",
        password: !user?.password ? "Password is required" : "",
      });
    }
  };

  const updateForm = (field) => {
    return (event) => {
      setUser({
        ...user,
        [field]: event.target.value,
      });
    };
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Email"
            placeholderText="Input Text"
            error={errors.email}
            onChange={updateForm("email")}
          ></Input>
          <Input
            labelText="Password"
            placeholderText="Input Text"
            error={errors.password}
            onChange={updateForm("password")}
          ></Input>
          <label className="form-errors">{errors.form}</label>
          <Button buttonText="Submit"></Button>
        </form>
        <p>
          If you don't have an account you may&nbsp;
          <Link to="/registration">Register</Link>
        </p>
      </div>
    </div>
  );
};
