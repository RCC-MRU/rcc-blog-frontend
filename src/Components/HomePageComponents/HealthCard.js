import React from "react";

const HealthCard = ({healthImg, healthTitle, healthText, healthDate}) => {
  return (
    <React.Fragment>
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <div className="card border-0">
          <img
            className="card-img-top health-section img-fluid"
            src={healthImg}
            alt="home"
          />

          <div className="card-body text-center">
            <h6 className="format-text-health">
              <span className="color-health"> Health</span> - {healthDate}
            </h6>
            <h4 className="card-title format-text-health-1">
              {healthTitle}
            </h4>

            <hr className="temp-line-format" />
            <p className="card-text font-format">
              {healthText}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HealthCard;
