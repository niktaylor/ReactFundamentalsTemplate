// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2927-216&mode=design&t=0FIG0iRzKcD0s16M-0
// // * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-191&mode=design&t=0FIG0iRzKcD0s16M-0
// // * render this component by route '/login'
// // * use login service to submit form data and make POST API request '/login'.
// // * component should have a link to the Registration page (see design)
// // * save token from API after success login to localStorage.
// // ** PAY ATTATION ** token should be saved to localStorage inside login handler function after login service responce
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#login-new-component

// // Module 3.
// // * save user's name, token and email to the store after success login.
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#login-component

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { login } from "../../services";
import { Button, Input } from "../../common";

export const Login = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?.email && user?.password) {
      login(user).then((res) => {
        if (res?.successful) {
          localStorage.setItem("token", res?.result);
          localStorage.setItem("username", res?.user.name);
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
