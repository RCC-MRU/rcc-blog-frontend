import React from "react";

const DisplayCard = ({blogImg, blogTitle, blogTextShorted, createdAt, category}) => {
  return (
    <React.Fragment>
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <div className="card border-0">
          <img
            className="card-img-top health-section img-fluid"
            src={blogImg}
            alt={blogTitle}
          />

          <div className="card-body text-center">
            <h6 className="format-text-health">
              <span className="color-health"> {category}</span> - {createdAt}
            </h6>
            <h4 className="card-title format-text-health-1">
              {blogTitle}
            </h4>

            <hr className="temp-line-format" />
            <p className="card-text font-format">
              {blogTextShorted}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayCard;
