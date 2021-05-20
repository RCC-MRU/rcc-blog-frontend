import React from 'react'

const OtherCategories = ({category}) => {
  // console.log(typeof category[1].categoryName);
    return (
      <>

{category.map((category) => {
  return (
    <div className="row-md-4" key={category.categoryId}>
    <a href={'/category/'}>
      <img
        src={category.categoryImg}
        className="img-fluid"
        alt="cat"
      />
      <div className="textblock">
        <span>{category.categoryName}</span>
      </div>
    </a>
    </div>
  );
})}
      </>
      
    )
}

export default OtherCategories
