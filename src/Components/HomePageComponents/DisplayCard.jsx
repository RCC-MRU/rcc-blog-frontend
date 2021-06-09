import React, { useState, useEffect } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import { createDescription, stripHTML } from "../../Util/StringUtil";

import { showBlogsByCategory } from "../../Util/axios";
import { filterCardsOnHomePage } from "../../Util/StringUtil";

const DisplayCard = (props) => {
  const [categoryCardData, setCategoryData] = useState([]);

  useEffect(() => {
    showBlogsByCategory(props.cardCategory)
      .then((data) => {
        let newArrayRes = filterCardsOnHomePage(data, 2);
        setCategoryData(newArrayRes);
      })
      .catch((err) => console.error(err));
  }, [props.cardCategory]);

  console.log("Display Card Page. Line 33", categoryCardData);

  return (
    <React.Fragment>
      <div className="section-spacing">
        <div className="row">
          {categoryCardData.map((cardData) => {
            return (
              <div className="col-md-6 my-3" key={cardData.blogId}>
                <Card className="border-0 card-effect-hover">
                  <img
                    src={cardData.blogImg}
                    alt={cardData.blogTitle}
                    className="featured-post-img img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <CardBody className="text-center">
                    <CardSubtitle tag="h6" className="format-text-health my-2">
                      <span className="text-dark-red">{cardData.category}</span>{" "}
                      - {new Date(cardData.createdAt).toLocaleDateString()}
                    </CardSubtitle>

                    <CardTitle tag="h5">{cardData.blogTitle}</CardTitle>
                    <hr className="temp-line-format" />
                    <CardText>
                      {createDescription(stripHTML(cardData.blogContent), 30)}
                    </CardText>
                  </CardBody>

                  {/* Read more Button */}
                  <div className="text-center">
                    <Link
                      to={"/blog/" + cardData.slug}
                      type="button"
                      className="readmore-btn Link-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayCard;
