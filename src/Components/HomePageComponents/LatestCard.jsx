import React from "react";
// todo

const LatestCard = ({ category, blogTitle, createdAt, blogImg }) => {
  return (
    <React.Fragment>
      <div
        className="featured-post-img"
        style={{ backgroundImage: `url(${blogImg})` }}
      >
        {/* <div className="centered">
          <button className="btn btn-black btn-sm text-white">
            {category}
          </button>
          <p>{blogTitle}</p>
          <p className="edit-font">Author - {createdAt}</p>
        </div> */}
        <div className="black-shadow-box">
          <div className="btn btn-black btn-sm edit-font">{category}</div>
          <p className="m-0">{blogTitle}</p>
          <p className="m-0 authorLatestCard">Author - {new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>


      

      {/* <div className="row">
          <div className="col-12 col-md-6 my-1 px-1">
            <div
              className="banner-img-left"
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <div className="centered">
                <button className="btn btn-black btn-sm text-white">
                  {category}
                </button>
                <p>{blogTitle}</p>
                <p className="edit-font">
                  {postAuthor} - {createdAt}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 my-1">
            <div className="row">
              <div className="col-6 px-2">
                <div
                  className="banner-img-right"
                  style={{ backgroundImage: `url(${blogImg})` }}
                >
                  <div className="centered">
                    <button className="btn btn-black btn-sm text-white">
                      {category}
                    </button>
                    <p>{blogTitle}</p>
                    <p className="edit-font">
                      {postAuthor} - {createdAt}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 px-2">
                <div
                  className="banner-img-right"
                  style={{ backgroundImage: `url(${blogImg})` }}
                >
                  <div className="centered">
                    <button className="btn btn-black btn-sm text-white">
                      {category}
                    </button>
                    <p>{blogTitle}</p>
                    <p className="edit-font">
                      {postAuthor} - {createdAt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </React.Fragment>
  );
};
export default LatestCard;
