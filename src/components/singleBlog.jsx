import React, { useEffect } from "react";
import "../css/singleBlog.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import axios from "axios";
import { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";

const SingleBlog = ({ id }) => {
  const [singleData, setSingleData] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleData();
    getComments();
  }, []);

  const getSingleData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setSingleData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sb-content">
      <div className="sb-info-container">
        <div className="sb-id a1">
          <FiberManualRecordIcon className="sb-margin" /> {singleData.id}
        </div>
        <div className="sb-title a1">
          {" "}
          <FiberManualRecordIcon className="sb-margin" /> {singleData.title}
        </div>
        <div className="sb-body a1">
          {" "}
          <FiberManualRecordIcon className="sb-margin" /> {singleData.body}
        </div>
      </div>
      <div className="sb-message-container">
        {comments
          .filter((comment) => comment.postId === id)
          .map((comment, index) => {
            return (
              <div className="comments" key={index}>
                <GradeIcon /> {comment.body}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleBlog;
