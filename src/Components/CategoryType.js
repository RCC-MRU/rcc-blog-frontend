import React from 'react';

const CategoryType = ({categoryName,categoryDate, categoryImage, categoryText, categoryAuthor, categoryTitle})=>{
    return(
        <React.Fragment>
            <div className="category-with-date">
                  {categoryName}<span className="category-grey">- {categoryDate}</span>
                </div>
                  <h3>{categoryTitle}</h3>
                  <img
                  src={categoryImage}
                  width="770px"
                  height="513px"
                  className="img-fluid"
                  alt="categories"
                />
                <div className="blog-text">
                  {categoryText}
                </div>
                <div className="readmore-button">
                  <span> Read More </span>
                </div>
                <hr />
                <div className="blog-like row">
                  <div className="col-md-6">
                    <p>{categoryAuthor}</p>
                  </div>
                  <div className="col-md-3">
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="col-md-3">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
                <hr style={{ marginTop: "-20px" }} />
                <hr style={{ marginTop: "-14px" }} />
        </React.Fragment>
    );
}
export default CategoryType