
  
import React, { useEffect, useState } from "react";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PostNav from "./components/PostNav";
import { useParams } from "react-router";
import db from "./firebase";
import { CircularProgress } from "@material-ui/core";

const PostBody = () => {
  const [dataPost, setDataPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        setDataPost(doc.data());
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="postBody">
      <PostNav />
      {loading ? (
        <CircularProgress
          style={{ margin: "100px 0", color: "#9AC4F8" }}
          size={100}
        />
      ) : (
        <div className="postBody_container postContainer">
          <h1>{dataPost?.title}</h1>

          <div
            className="postBody_image"
            style={{ backgroundImage: `url(${dataPost?.image})` }}
          />

          <p>{dataPost?.paragraph}</p>

          <div className="postBody_icons">
            <div className="postBody_Container">
              <ThumbsUpDownIcon />
              <h3 style={{ marginRight: "20px" }}>5</h3>

              <ChatBubbleOutlineIcon />
              <h3>3</h3>
            </div>

            <div className="postBody_Container">
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostBody;