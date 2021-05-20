import React from 'react'

const OtherCategories = (categoryImg, categoryName) => {
    return (
        <div className="row-md-4">
                    <img
                      src={categoryImg}
                      className="img-fluid"
                      alt="cat"
                    />
                    <div className="textblock">
                      <span>{categoryName}</span>
                    </div>
                  </div>
    )
}

export default OtherCategories
