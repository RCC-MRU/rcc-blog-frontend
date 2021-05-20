import React from "react";
// import "../Styles/rightsidemenu.css";

const RightSideMenuBot = ({
  blogImg, blogTitle, createdAt
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
      <div className="row">
                  <div className="col-6">
            <img
              src={blogImg}
              alt="latest-post"
              width="140px"
              // height="90%"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <h6>{blogTitle}</h6>
            <p>{new Date(createdAt).toLocaleDateString()}</p>
          </div>
              </div>
  );
};

export default RightSideMenuBot;
