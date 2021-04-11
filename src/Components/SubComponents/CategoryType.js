import React from "react";

const CategoryType = ({
  categoryDate,
  categoryImage,
  categoryText,
  categoryAuthor,
  categoryTitle,
}) => {
  return (
    <React.Fragment>
      <div className="category-with-date">
        posted on<span className="category-grey">- {categoryDate}</span>
      </div>
      <h3>{categoryTitle}</h3>
      <img
        src={categoryImage}
        width="770px"
        height="513px"
        className="img-fluid"
        alt="categories"
      />
      <div className="blog-text">{categoryText}</div>
      <div className="readmore-button">
        <span>
          <a
            href="/blog"
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
          >
            Read More
          </a>
        </span>
      </div>
      <hr />
      <div className="blog-like">
        <div className="row">
          <div className="col-12 col-md-6 py-2">
            <div className="row">
              <div className="col-6">
                <span className="shadow-text">By:</span> {categoryAuthor}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-6 py-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <i className="fa fa-heart">20</i>
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fa fa-envelope fa-lg"></i>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "-10px" }} />
      <hr style={{ marginTop: "-14px" }} />
    </React.Fragment>
  );
};
export default CategoryType;
