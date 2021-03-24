import React from "react";

const LatestPost = ({
  postCategory,
  postTitle,
  postAuthor,
  postDate,
  postImage,
  postImage2,
}) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 my-1 px-1">
            <div
              className="banner-img-left"
              style={{ backgroundImage: `url(${postImage2})` }}
            >
              <div className="centered">
                <button className="btn btn-black btn-sm text-white">
                  {postCategory}
                </button>
                <p>{postTitle}</p>
                <p className="edit-font">
                  {postAuthor} - {postDate}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 my-1">
            <div className="row">
            <div className="col-6 px-2">
              <div
                className="banner-img-right"
                style={{ backgroundImage: `url(${postImage})` }}
              >
                <div className="centered">
                  <button className="btn btn-black btn-sm text-white">
                    {postCategory}
                  </button>
                  <p>{postTitle}</p>
                  <p className="edit-font">
                    {postAuthor} - {postDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 px-2">
              <div
                className="banner-img-right"
                style={{ backgroundImage: `url(${postImage})` }}
              >
                <div className="centered">
                  <button className="btn btn-black btn-sm text-white">
                    {postCategory}
                  </button>
                  <p>{postTitle}</p>
                  <p className="edit-font">
                    {postAuthor} - {postDate}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LatestPost;
