// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-219&mode=design&t=0FIG0iRzKcD0s16M-0
// // * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-257&mode=design&t=0FIG0iRzKcD0s16M-0
// // * render this component by route "/registration"
// // * submit form data and make POST API request "/registration".
// // * after successful registration navigates to "/login" route.
// // * component should have a link to the Login page (see design)
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#registration-new-component
//
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { createUser } from "../../services";
import { Button, Input } from "../../common";

export const Registration = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?.name && user?.email && user?.password) {
      createUser(user).then((res) => {
        if (res?.successful) {
          navigate("/login");
        } else {
          setErrors({
            ...errors,
            form: res?.errors?.join(",\n"),
          });
        }
      });
    } else {
      setErrors({
        name: !user?.name ? "Name is required" : "",
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
      <h1>Registration</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Name"
            placeholderText="Input Text"
            error={errors.name}
            onChange={updateForm("name")}
          ></Input>
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
          If you have an account you may&nbsp;<Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};
