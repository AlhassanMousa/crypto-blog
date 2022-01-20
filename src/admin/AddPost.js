import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "../style/App.scss";

import {auth} from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';







const   AddPost = () => {
const [value, setValues] = useState({ title: "", paragraph: "", url: "" });
const changeValue = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
const submit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      title: value.title,
      paragraph: value.paragraph,
      image: value.url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setValues({ ...value, title: "", paragraph: "", url: "" });
  };


    
  return (
    <div className="App">
          <form onSubmit={submit}>
          <Container>
            <span className="span1">

         </span>
            <h1>قم بإنشاء بوست جديد</h1>
  
            <div className="Form_InputDivs">
              <p>Title</p>
              <input
                value={value.title}
                name="title"
                type="text"
                placeholder="العنوان..."
                onChange={changeValue}
              />
            </div>
            <div className="Form_InputDivs">
              <p>Paragraph</p>
              <textarea
              cols="50" rows="10"
                value={value.paragraph}
                type="text"
                placeholder="نص المقاله..."
                name="paragraph"
                onChange={changeValue}
              />
            </div>
            <div className="Form_InputDivs">
              <p>Image URL</p>
              <input
                value={value.url}
                type="text"
                placeholder="لينك المقاله"
                name="url"
                onChange={changeValue}
              />
            </div>

            <div className="Form_SubmitBtn">
              <Button type="submit">Submit</Button>
              <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>

            </div>
          </Container>
        </form> 
        
        </div>
  )}

export default AddPost ;