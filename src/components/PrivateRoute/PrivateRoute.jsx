// Module 4.
// * uncomment this component (ctrl + a => ctrl + /)
// * find example https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/private-routes
// * use 'PrivateRoute' to navigate to the routes:
//   ** '/courses/add';
//   ** '/courses/update/:courseId'.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#private-route-new-component

import React from "react";
import { useSelector } from "react-redux";
import { isAdminSelector } from "../../store/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAdmin = useSelector(isAdminSelector);

  return isAdmin ? children : <Navigate to="/courses" />;
};
