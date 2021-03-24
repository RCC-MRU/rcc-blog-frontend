import React from 'react';

const RightMenu=({authorPicture, aboutAuthor, authorName, moreCategoryName, moreCategoryImage, latestPostName, latestPostImage, latestPostDate})=>{
    return(
        <React.Fragment>
            <div className="row-md-3">
                  <hr />
                  <h4 className="border">About</h4>
                  <img
                    src={
                      authorPicture
                    }
                    width="auto"
                    height="227px"
                    className="img-fluid"
                    alt="fitness"
                  />
                  <p style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    I am {authorName} <br />
                    <span>{aboutAuthor}</span>
                  </p>
                  <h5
                    style={{
                      fontFamily: "Red Hat Text, sans-serif",
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
                      <i className="fab fa-facebook-f socials"></i>
                    </div>
                    <div>
                      <i className="fab fa-instagram socials"></i>
                    </div>
                    <div>
                      <i className="fab fa-google-plus socials"></i>
                    </div>
                    <div>
                      <i className="fab fa-twitter socials"></i>
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
                      src={moreCategoryImage}
                      className="img-fluid"
                      alt="cat"
                    />
                    <div className="textblock">
                      <span>{moreCategoryName}</span>
                    </div>
                  </div>
                  <div className="row-md-4">
                    <img
                      src={moreCategoryImage}
                      className="img-fluid"
                      alt="pic"
                    />
                    <div className="textblock">
                      <span>{moreCategoryName}</span>
                    </div>
                  </div>
                  <div className="row-md-4">
                    <img
                      src={moreCategoryImage}
                      className="img-fluid"
                      alt="work-out"
                    />
                    <div className="textblock">
                      <span>{moreCategoryName}</span>
                    </div>
                  </div>
                </div>
                <div className="latestPosts row-md-3">
                  <hr />
                  <h4 className="latestPosts-title border">Latest Posts</h4>
                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={latestPostImage}
                        className="img-fluid"
                        alt="latest-post"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>{latestPostName}</h6>
                      <p>{latestPostDate}</p>
                    </div>
                  </div>

                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={latestPostImage}
                        className="img-fluid"
                        alt="workout-routine"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>{latestPostName}</h6>
                      <p>{latestPostDate}</p>
                    </div>
                  </div>

                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={latestPostImage}
                        className="img-fluid"
                        alt="wk-route"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>{latestPostName}</h6>
                      <p>{latestPostDate}</p>
                    </div>
                  </div>
                </div>
        </React.Fragment>
    );
};

export default RightMenu