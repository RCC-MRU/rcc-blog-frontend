import React from "react";

const PopularCard = ({ cardID, cardTitle, cardText, cardImg }) => {
  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center" key={cardID} style={{backgroundColor: "##CAD5E2"}}>
        <div className="card border-0">
          <img
            className="card-img-top format-card-image"
            src={cardImg}
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
