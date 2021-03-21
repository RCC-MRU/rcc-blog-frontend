import React, { Component } from "react";

class BlogpostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
              <img
                src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                width="770px"
                height="513px"
                className="img-fluid"
                alt="exercise1"
              />

              <div className="blog-text">
                Why do we use it?
                <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like)
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
                <br />
                Why do we use it?
                <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
                <br />
                Why do we use it?
                <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like)..
              </div>

              <hr />
              <div className="blog-like row">
                <div className="col-md-6">
                  <p>Kunal Arora</p>
                </div>
                <div className="col-md-3">
                  <i className="fa fa-heart"></i>
                </div>
                <div className="col-md-3">
                  <i className="fa fa-facebook-f"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-envelope"></i>
                </div>
              </div>

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
