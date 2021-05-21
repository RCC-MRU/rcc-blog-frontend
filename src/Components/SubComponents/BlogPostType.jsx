import React from "react";
// import ReadingProgress from "./ReadingBar";

const BlogPostType = (props) => {
  // const target = React.createRef();
  return (
    <React.Fragment>
      {/* <ReadingProgress target={target} /> */}

      <div className="btn bg-dark-red btn-sm edit-font mb-2">
        {props.category}
      </div>
      <h3>{props.blogTitle}</h3>
      <div className="blog-header-img">
        <img src={props.blogImg} className="img-fluid" alt={props.blogTitle} />
      </div>
      <div className="blog-text">{props.blogContent}</div>
      <hr />
      <div className="blog-like">
        <div className="row">
          <div className="col-12 col-md-6 py-2">
            <div className="row">
              <div className="col-6">
                <span className="shadow-text">By:</span> {props.blogPostAuthor}
              </div>
              <div className="col-6">
                <span className="shadow-text">On:</span>{" "}
                {new Date(props.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 py-2 mb-4"
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
