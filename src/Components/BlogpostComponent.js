import React, { Component } from "react";
import BlogPostType from "./BlogPostType";

class BlogpostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      blogPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      blogPostAuthor:"Kunal Arora",
      blogPostText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="fitness-title">
            <span> Fitness </span>
          </div>
          <h3>Add This to your workout routine</h3>

          <div className="row">
            <div className="col-md-9">
              <BlogPostType 
              blogPostName={this.state.blogPostName}
              blogPostImage={this.state.blogPostImage}
              blogPostAuthor={this.state.blogPostAuthor}
              />

              <div className="form">
                <hr style={{ marginTop: "-20px" }} />
                <hr style={{ marginTop: "-14px" }} />
                <form>
                  <textarea
                    placeholder="Leave a Comment"
                    onChange={this.handleChange}
                  />
                  <div className="Post-btn">
                    <input type="submit" value="Post" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row-md-3">
                <hr />
                <h4 className="border">About</h4>
                <img
                  src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
                  width="auto"
                  height="227px"
                  className="img-fluid"
                  alt="exercise2"
                />
                <p style={{ fontFamily: "Red Hat Text" }}>
                  I am x y z <br />
                  bkvabhabuhvawebubdbhva
                </p>
                <h5
                  style={{
                    fontFamily: "'Red Hat Text', sans-serif",
                    size: "23px",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Read More
                </h5>
              </div>

              <div className="row-md-3">
                <hr />
                <h4 className="connectAndFollow-title border">
                  Connect And Follow
                </h4>
                <div className="social-blogpost">
                  <div>
                    <i className="fa fa-facebook-f"></i>
                  </div>
                  <div>
                    <i className="fa fa-instagram"></i>
                  </div>
                  <div>
                    <i className="fa fa-google-plus"></i>
                  </div>
                  <div>
                    <i className="fa fa-twitter"></i>
                  </div>
                  <div>
                    <i className="fa fa-rss-square"></i>
                  </div>
                </div>
              </div>

              <div className="categories row-md-3">
                <hr />
                <h4 className="categories-title border">Categories</h4>
                <div className="row-md-4">
                  <img
                    src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                    className="img-fluid"
                    alt="exercise1"
                  />
                  <div className="textblock">
                    <span>fitness</span>
                  </div>
                </div>
                <div className="row-md-4">
                  <img
                    src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                    className="img-fluid"
                    alt="exercise1"
                  />
                  <div className="textblock">
                    <span>workout</span>
                  </div>
                </div>
                <div className="row-md-4">
                  <img
                    src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                    className="img-fluid"
                    alt="exercise1"
                  />
                  <div className="textblock">
                    <span>health</span>
                  </div>
                </div>
              </div>

              <div className="latestPosts row-md-3">
                <hr />
                <h4 className="latestPosts-title border">Latest Posts</h4>
                <div className="row-md-4">
                  <div className="col-md-6">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="exercise1"
                    />
                  </div>
                  <div className="col-md-6">
                    <h6>Add this to your workout routine</h6>
                    <p>NOV 26 , 2020</p>
                  </div>
                </div>

                <div className="row-md-4">
                  <div className="col-md-6">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="exercise1"
                    />
                  </div>
                  <div className="col-md-6">
                    <h6>Add this to your workout routine</h6>
                    <p>NOV 26 , 2020</p>
                  </div>
                </div>

                <div className="row-md-4">
                  <div className="col-md-6">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="exercise1"
                    />
                  </div>
                  <div className="col-md-6">
                    <h6>Add this to your workout routine</h6>
                    <p>NOV 26 , 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogpostComponent;
