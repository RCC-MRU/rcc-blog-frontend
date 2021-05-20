import React from "react";
// import "../Styles/rightsidemenu.css";

const RightSideMenuBot = ({
  props
}) => {
  // const [similar, setSimilar] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(`/routes/author/${props.category}`)
  //     .then((resp) => {
  //       const authorDetails = resp.data.details;
  //       console.log(authorDetails);

  //       setSimilar(authorDetails);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [props.category]);
  return (
    <React.Fragment>
      {/* <div className="categories row-md-3">
        <hr />
        <h4 className="categories-title border">Categories</h4>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="cat" />
          <div className="textblock">
            <span>{moreCategoryName}</span>
          </div>
        </div>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="pic" />
          <div className="textblock">
            <span>{moreCategoryName}</span>
          </div>
        </div>
        <div className="row-md-4">
          <img src={moreCategoryImage} className="img-fluid" alt="work-out" />
          <div className="textblock">
            <span>{moreCategoryName}</span>
          </div>
        </div>
      </div> */}
      {/* <div className="categories row-md-3">
        <hr />
        <h4 className="latestPosts-title border">Latest Posts</h4>
        <div className="row-md-4"> */}
        
          <div className="col-md-6">
            <img
              src={props.blogImg}
              className="img-fluid"
              alt="latest-post"
            />
          </div>
          <div className="col-md-6">
            <h6>{props.latestPostName}</h6>
            <p>{new Date(props.createdAt).toLocaleDateString()}</p>
          </div>
        {/* </div> */}

        {/* <div className="row-md-4">
          <div className="col-md-6">
            <img
              src={similar.latestPostImage}
              className="img-fluid"
              alt="workout-routine"
            />
          </div>
          <div className="col-md-6">
            <h6>{latestPostName}</h6>
            <p>{latestPostDate}</p>
          </div>
        </div> */}

        {/* <div className="row-md-4">
          <div className="col-md-6">
            <img src={latestPostImage} className="img-fluid" alt="wk-route" />
          </div>
          <div className="col-md-6">
            <h6>{latestPostName}</h6>
            <p>{latestPostDate}</p>
          </div>
        </div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RightSideMenuBot;
