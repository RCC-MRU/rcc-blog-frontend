import React from "react";
import { createDescription, stripHTML } from '../../Util/StringUtil'


const BlogPostType = ({
  createdAt,
  blogImg,
  blogPostAuthor,
  blogContent,
  blogTitle,
  category
}) => {
  return (
    <React.Fragment>
      <div className="fitness-title">
        <span> {category} </span>
      </div>
      <h3>{blogTitle}</h3>
      <img
        src={blogImg}
        width="770px"
        height="513px"
        className="img-fluid"
        alt="exercise1"
      />

      <div className="blog-text">{createDescription(stripHTML(blogContent), 1000)}</div>
      {/* {blogContent} */}
      <hr />
      <div className="blog-like">
        <div className="row">
          <div className="col-12 col-md-6 py-2">
            <div className="row">
              <div className="col-6">
                <span className="shadow-text">By:</span> {blogPostAuthor}
              </div>
              <div className="col-6">
                <span className="shadow-text">On:</span> {createdAt}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 py-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {/* <i className="fa fa-heart">20</i> */}
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fa fa-envelope fa-lg"></i>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "-10px" }} />
      <hr style={{ marginTop: "-14px" }} />
    </React.Fragment>
  );
};
export default BlogPostType;
