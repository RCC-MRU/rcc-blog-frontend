import React from "react";

const PopularCard = ({ blogID, blogTitle, category, blogImg }) => {
  return (
    <React.Fragment>
      <div className="col-12 p-2 d-flex justify-content-center" key={blogID} style={{backgroundColor: "#fff"}}>
        <div className="card border-0">
          <img
            className="card-img-top format-card-image img-fluid"
            src={blogImg}
            alt={blogTitle}
          />
          <div className="card-body text-center">
            <h4 className="card-title format-text-popular">{category}</h4>
            <p className="card-text format-text-para">{blogTitle}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopularCard;
