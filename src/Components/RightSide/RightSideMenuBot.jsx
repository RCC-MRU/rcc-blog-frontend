import React from "react";
// import "../Styles/rightsidemenu.css";

const RightSideMenuBot = ({
  moreCategoryName,
  moreCategoryImage,
  latestPostName,
  latestPostImage,
  latestPostDate,
}) => {
  return (
    <React.Fragment>
      <div className="categories row-md-3">
        <hr />
        <h4 className="categories-title border">Categories</h4>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="cat" />
          <div className="textblock">
            <span>{moreCategoryName}</span>
          </div>
        </div>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="pic" />
          <div className="textblock">
            <span>{moreCategoryName}</span>
          </div>
        </div>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="work-out" />
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
            <img src={latestPostImage} className="img-fluid" alt="wk-route" />
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

export default RightSideMenuBot;
