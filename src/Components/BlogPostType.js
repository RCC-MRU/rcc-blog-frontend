import React from 'react';

const BlogPostType = ({blogPostImage, blogPostText, blogPostAuthor, blogPostCategory, blogPostTitle})=>{
    return(
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

              <div className="blog-text">
              {blogPostText}
              </div>

              <hr />
              <div className="blog-like row">
                <div className="col-md-6">
                  <p>{blogPostAuthor}</p>
                </div>
                <div className="col-md-3">
                  <i className="fa fa-heart"></i>
                </div>
                <div className="col-md-3">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fa fa-envelope"></i>
                </div>
              </div>
        </React.Fragment>
    );
}
export default BlogPostType