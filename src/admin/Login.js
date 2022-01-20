import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';

import "../style/index.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await 
          firebase.auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/AddPost");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/AddPost" />;
  }

  return (
    <div>
      <h1>Log in please</h1>
      <form onSubmit={handleLogin}>
      
       <label>
           
          <input name="email" type="email" placeholder="Email" />
          &nbsp;&nbsp;&nbsp; &nbsp;Email
        </label>
        <label>
        
          <input name="password" type="password" placeholder="Password" />
          &nbsp;&nbsp; Password
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
