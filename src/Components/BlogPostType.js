import React from "react";

const BlogPostType = ({
  blogDate,
  blogPostImage,
  blogPostAuthor,
  blogPostText,
  blogPostTitle,
  blogPostCategory
}) => {
  return (
    <React.Fragment>
      <div className="fitness-title">
        <span> {blogPostCategory} </span>
      </div>
      <h3>{blogPostTitle}</h3>
      <img
        src={blogPostImage}
        width="770px"
        height="513px"
        className="img-fluid"
        alt="exercise1"
      />

      <div className="blog-text">{blogPostText}</div>

      <hr />
      <div className="blog-like">
        <div className="row">
          <div className="col-12 col-md-6 py-2">
            <div className="row">
              <div className="col-6">
                <span className="shadow-text">By:</span> {blogPostAuthor}
              </div>
              <div className="col-6">
                <span className="shadow-text">On:</span> {blogDate}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 py-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <i className="fa fa-heart">20</i>
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fa fa-envelope fa-lg"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BlogPostType;
