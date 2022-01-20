import React from "react";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import moment from "moment";
import { Link } from "react-router-dom";
import '../style/App.scss'

const MediumPosts = ({ id, data }) => {
  return (
    <Link to={`/Post/${id}`} style={{ textDecoration: "none" }}>
      <div className="MediumPosts col-md-8">
      {data.image && (
          <div
            className="MediumPosts_image"
            style={{ backgroundImage: `url(${data.image})` }}
          />
        )}
        <div className="MediumPost_Text">
          
        <div >   
          <h2>{data.title}</h2>
          </div>   

          <div>   
          <p>{data.paragraph.substring(0, 100)+'..'}</p>
          </div>  
          <div className="MediumPosts_TimeStamps">
            <div className="MediumPosts_TimeStamp_Paragraph">
              <span>
                {moment(new Date(data?.timestamp?.toDate()), "YYYYMMDD").format(
                  "LL"
                )}
              </span>
              &nbsp;-&nbsp;
              <span style={{ display: "flex", alignItems: "center" }}>
                {moment(
                  new Date(data?.timestamp?.toDate()),
                  "YYYYMMDD"
                ).fromNow()}

                <StarIcon />
              </span>
            </div>
            <BookmarkBorderIcon className="MediumPosts_Bookmark" />
          </div>
      
        </div>

       
      </div>
    </Link>
  );
};

export default MediumPosts;
