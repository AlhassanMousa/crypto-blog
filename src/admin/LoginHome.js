import React from "react";
import "../style/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import AddPost from "./AddPost";

const LoginHome = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
        <PrivateRoute exact path="/AddPost" component={AddPost} />
        <Route exact path="/Login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default LoginHome;


/*

          <PrivateRoute exact path="/" component={App} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

*/

/*

          <Route exact path="/signup" component={SignUp} />

*/