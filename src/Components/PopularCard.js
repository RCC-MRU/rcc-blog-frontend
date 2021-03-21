import React from "react";

const PopularCard = ({cardTitle, cardText}) => {
  return (
    <React.Fragment>
      <div className="col-12 col-sm-3 d-flex justify-content-center">
        <div className="card border-0">
          <img
            className="card-img-top format-card-image"
            src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
            alt="home"
          />
          <div className="card-body text-center">
            <h4 className="card-title format-text-popular">{cardTitle}</h4>
            <p className="card-text format-text-para">{cardText}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopularCard;
