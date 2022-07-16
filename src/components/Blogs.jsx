import React, { useEffect } from "react";
import { useState } from "react";
import "../css/blogs.css";
import axios from "axios";
import SingleBlog from "./singleBlog";

const Blogs = ({ filterId }) => {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("aaaaaaaa", id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const listenClick = (id) => {
    setId(id);
    setShow(true);
  };

  return (
    <>
      {show ? (
        <SingleBlog id={id} />
      ) : filterId.state ? (
        blogs
          .filter((blog) => filterId.id === blog.id)
          .map((blog, index) => {
            return (
              <div
                className="blog-container"
                key={index}
                onClick={() => listenClick(blog.id)}
              >
                <div className="blog-id">{blog.id}</div>
                <div className="blog-title">{blog.title}</div>
                <div className="blog-body">{blog.body}</div>
              </div>
            );
          })
      ) : (
        blogs.map((blog, index) => {
          return (
            <div
              className="blog-container"
              key={index}
              onClick={() => listenClick(blog.id)}
            >
              <div className="blog-id">{blog.id}</div>
              <div className="blog-title">{blog.title}</div>
              <div className="blog-body">{blog.body}</div>
            </div>
          );
        })
      )}
    </>
  );
};
export default Blogs;
