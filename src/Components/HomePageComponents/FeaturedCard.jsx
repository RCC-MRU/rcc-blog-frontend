import React from "react";
// todo

const FeaturedCard = (props) => {
  return (
    <React.Fragment>
      <div
        className="featured-post-img"
        style={{ backgroundImage: `url(${props.blogImg})` }}
      >
        {/* <div className="centered">
          <button className="btn btn-black btn-sm text-white">
            {category}
          </button>
          <p>{blogTitle}</p>
          <p className="edit-font">Author - {createdAt}</p>
        </div> */}
        <div className="black-shadow-box">
          <div className="btn bg-color-black btn-sm edit-font">{props.category}</div>
          <p className="m-0">{props.blogTitle}</p>
          <p className="m-0 authorLatestCard">{props.authorName} - {new Date(props.createdAt).toLocaleDateString()}</p>
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
export default FeaturedCard;
