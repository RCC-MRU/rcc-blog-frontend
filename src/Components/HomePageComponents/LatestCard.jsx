import React from "react";
// todo

const LatestCard = ({
  category,
  blogTitle,
  postAuthor,
  createdAt,
  blogImg,
}) => {
  return (
    <React.Fragment>
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
      {/* <div className="container"> */}
      {/* </div> */}
      {/* <div className="col-md-4 my-1 px-1">
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


          <div className="col-md-4 my-1 px-1">
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
          </div> */}

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
