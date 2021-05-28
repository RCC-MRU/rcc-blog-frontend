import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import { createDescription, stripHTML } from "../../Util/StringUtil";

// const RandomCategory = ({ cardData, cardData1 }) => {
//   let n = 2;
//   for (var i = 0; i < n; i++) {
//     var print = Math.floor(Math.random() * cardData.length);
//     if (cardData1 === null) {
//       cardData1.push(cardData[print]);
//     } else if (cardData1[0] === cardData[print]) {
//       n = n + 1;
//       continue;
//     } else {
//       cardData1.push(cardData[print]);
//     }
//   }
// }

const DisplayCard = (props) => {
  const [categoryCardData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get(`/blogs/showBlogsByCategory/${props.cardCategory}`)
      .then((res) => {
        const data = res.data.data;
        // console.log(data);
        setCategoryData(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, [props.cardCategory]);

  // FIXME: use the random category block so that to enter the categoryCardData json into the section and then return only 2 arrays

  return (
    <React.Fragment>
      <div className="section-spacing">
        <div className="row">
          {categoryCardData.map((cardData) => {
            return (
              <React.Fragment key={cardData.blogId}>
                <div className="col-md-6 my-3">
                  {/* <Link
                    to={"/blog/" + cardData.slug}
                    style={{ textDecoration: "none", color: "#000" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                  <Card className="border-0 card-effect-hover">
                    <img
                      src={cardData.blogImg}
                      alt={cardData.blogTitle}
                      className="featured-post-img img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                    <CardBody className="text-center">
                      <CardSubtitle
                        tag="h6"
                        className="format-text-health my-2"
                      >
                        <span className="text-dark-red">
                          {cardData.category}
                        </span>{" "}
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
                        className="readmore-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </Link>
                    </div>
                  </Card>

                  {/* </Link> */}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* <div className="text-center">
          <Link
            to={`/category` + props.cardPageSlug}
            type="button"
            className="readmore-btn"
          >
            Read More
          </Link>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default DisplayCard;
