import React from "react";
// import "../Styles/rightsidemenu.css";

const RightSideMenuBot = ({ blogImg, blogTitle, createdAt }) => {
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
    <div className="row card-effect-hover p-0 my-2">
      <div className="col-6 p-0 my-auto">
        <img
          src={blogImg}
          alt="latest-post"
          width="100%"
          // width="140px"
          // height="90%"
          className="img-fluid"
        />
      </div>
      <div className="col-6 my-auto">
        <h6>{blogTitle}</h6>
        <p>{new Date(createdAt).toLocaleDateString("en-GB")}</p>
      </div>
    </div>
  );
};

export default RightSideMenuBot;
