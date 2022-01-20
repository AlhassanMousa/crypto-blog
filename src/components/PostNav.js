import { Button, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ox from '../images/ox.png';

const PostNav = () => {
  return (
    <div className="PostNav">
      <Container>
        <div className="PostNav_Container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={ox}
              alt="logo"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PostNav;


