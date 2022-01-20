import { Container } from "@material-ui/core";
import React, {useEffect, useState } from "react";
 import { NavLink ,withRouter} from "react-router-dom";
 import { Link } from "react-router-dom";

import {BiUser} from 'react-icons/bi';
import ox from '../images/ox.png';
import "../style/App.scss"
const NavBar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className={`NavBar ${active && "active"}`}>
      <Container>
  
        <div className=" NavBar_Lists right">
            <ul>
          <li><NavLink  to="/Login"><BiUser/></NavLink></li>
            </ul>
          </div>
         <div className="NavBar_Container">

          


        <div className="NavBar_Lists">
   
 

          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={ox}
            alt=""
          />
      </Link>
        </div>

     



      </Container>
    </div>
  );
};

export default NavBar;
       /*     <li>Our Story</li>
              <li>Add Post</li>
              <li>Write</li>
              <li>Sign In</li>      */

/*
              <li><NavLink to="">Our Story</NavLink></li>
              <li><NavLink to=""> Add Post</NavLink></li>
              <li><NavLink to="">Write</NavLink></li>
              <li><NavLink to="">Sign In</NavLink></li>
  */

              /**
               * 
               * 
               *        <li>
                              <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>log</button>
              </li>
               */