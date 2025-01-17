import React from "react";

import { Route, Navigate } from "react-router";

function ProtectedRoute({ children, loggedIn, ...props }) {
  return (
    <Route {...props}>{loggedIn ? children : <Navigate to={"/"} />}</Route>
  );
}

export default ProtectedRoute;
