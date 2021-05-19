import React, { useState, useEffect } from "react";
import BlogPostType from "./SubComponents/BlogPostType";
import RightSideMenuTop from "./RightSide/RightSideMenuTop";
// import RightSideMenuBot from "./RightSide/RightSideMenuBot";
import axios from "axios";
// import ReadingProgress from "./SubComponents/ReadingBar";

// class BlogpostComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogInfo: [
//         {
//           blogId: 0,
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           blogPostAuthor: "Kunal Arora",
//           createdAt: "31 Mar, 2021",
//           blogContent: `Why do we use it?
//       It is a long established fact that a reader will be distracted
//       by the readable content of a page when looking at its layout.
//       The point of using Lorem Ipsum is that it has a more-or-less
//       normal distribution of letters, as opposed to using 'Content
//       here, content here', making it look like readable English. Many
//       desktop publishing packages and web page editors now use Lorem
//       Ipsum as their default model text, and a search for 'lorem
//       ipsum' will uncover many web sites still in their infancy.
//       Various versions have evolved over the years, sometimes by
//       accident, sometimes on purpose (injected humour and the like)
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy
//       text ever since the 1500s, when an unknown printer took a galley
//       of type and scrambled it to make a type specimen book. It has
//       survived not only five centuries, but also the leap into
//       electronic typesetting, remaining essentially unchanged. It was
//       popularised in the 1960s with the release of Letraset sheets
//       containing Lorem Ipsum passages, and more recently with desktop
//       publishing software like Aldus PageMaker including versions of
//       Lorem Ipsum.
//       Why do we use it?
//       It is a long established fact that a reader will be distracted
//       by the readable content of a page when looking at its layout.
//       The point of using Lorem Ipsum is that it has a more-or-less
//       normal distribution of letters, as opposed to using 'Content
//       here, content here', making it look like readable English. Many
//       desktop publishing packages and web page editors now use Lorem
//       Ipsum as their default model text, and a search for 'lorem
//       ipsum' will uncover many web sites still in their infancy.
//       Various versions have evolved over the years, sometimes by
//       accident, sometimes on purpose (injected humour and the like).
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy
//       text ever since the 1500s, when an unknown printer took a galley
//       of type and scrambled it to make a type specimen book. It has
//       survived not only five centuries, but also the leap into
//       electronic typesetting, remaining essentially unchanged. It was
//       popularised in the 1960s with the release of Letraset sheets
//       containing Lorem Ipsum passages, and more recently with desktop
//       publishing software like Aldus PageMaker including versions of
//       Lorem Ipsum.
//       Why do we use it?
//       It is a long established fact that a reader will be distracted
//       by the readable content of a page when looking at its layout.
//       The point of using Lorem Ipsum is that it has a more-or-less
//       normal distribution of letters, as opposed to using 'Content
//       here, content here', making it look like readable English. Many
//       desktop publishing packages and web page editors now use Lorem
//       Ipsum as their default model text, and a search for 'lorem
//       ipsum' will uncover many web sites still in their infancy.
//       Various versions have evolved over the years, sometimes by
//       accident, sometimes on purpose (injected humour and the like)..`,
//           authorPicture: process.env.PUBLIC_URL + "images/exercise2.jpg",
//           authorName: "Kunal",
//           aboutAuthor: "Lorem ipsum dolor set amet sity",
//           moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           latestPostDate: "20 Nov, 2020",
//           latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           moreCategoryName: "fitness",
//           latestPostName: "Add this to your Daily work routine.",
//           blogTitle: "Add this to your daily work routine",
//           category: "fitness",
//         },

//         {
//           blogId: 1,
//           blogImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
//           blogPostAuthor: "Sanchit Bajaj",
//           createdAt: "31 Mar, 2021",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
//           authorPicture: process.env.PUBLIC_URL + "images/exercise2.jpg",
//           authorName: "Kunal",
//           aboutAuthor: "Lorem ipsum dolor set amet sity",
//           moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           latestPostDate: "20 Nov, 2020",
//           latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           moreCategoryName: "fitness",
//           latestPostName: "Add this to your Daily work routine.",
//           blogTitle: "Add this to your daily work routine",
//           category: "fitness",
//         },
//       ],
//     };
//   }

//   // handleChange = (e) => {
//   //   this.setState({
//   //     value: e.target.value,
//   //   });
//   // };

//   render() {
//     let value = 0;
//     const target= React.createRef();
//     return (
//       <React.Fragment>
//         <ReadingProgress target={target}/>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-9" ref={target}>
//               {this.state.blogInfo
//                 .filter((info) => {
//                   return info.blogId === value;
//                 })
//                 .map((data) => {
//                   return (
//                     <BlogPostType key={data.blogId}
//                     createdAt={data.createdAt}
//                       blogImg={data.blogImg}
//                       blogPostAuthor={data.blogPostAuthor}
//                       blogContent={data.blogContent}
//                       blogTitle={data.blogTitle}
//                       category={data.category}
//                     />
//                   );
//                 })}

//               {/* <div className="form">
//                 <hr style={{ marginTop: "-20px" }} />
//                 <hr style={{ marginTop: "-14px" }} />
//                 <form>
//                   <textarea
//                     placeholder="Leave a Comment"
//                     onChange={this.handleChange}
//                   />
//                   <div className="Post-btn">
//                     <input type="submit" value="Post" />
//                   </div>
//                 </form>
//               </div> */}
//             </div>

//             <div className="col-md-3">
//               <RightSideMenuTop
//                 authorPicture={this.state.blogInfo[0].authorPicture}
//                 authorName={this.state.blogInfo[0].authorName}
//                 aboutAuthor={this.state.blogInfo[0].aboutAuthor}
//               />
//               <RightSideMenuBot
//                 moreCategoryImage={this.state.blogInfo[0].moreCategoryImage}
//                 latestPostDate={this.state.blogInfo[0].latestPostDate}
//                 latestPostImage={this.state.blogInfo[0].latestPostImage}
//                 latestPostName={this.state.blogInfo[0].latestPostName}
//                 moreCategoryName={this.state.blogInfo[0].moreCategoryName}
//               />
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

const BlogpostComponent = () => {
  const [blogdata, setBlogdata] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  // const [userName, setUserName] = useState('');
  // // const [similar, setSimilar] =useState([]);

  // const getUserInfo = () => {
  //   let FirstName = setUserName(()=> blogdata.id===userInfo.userId ? userInfo.firstName : "")
  //   return FirstName
  // }

  const [category, setCategory] = useState([]);
  useEffect(() => {
    // fetching data 
    axios
      .get("/showCategoryMaster")
      .then((res) => {
        const about = res.data;

        setCategory(about);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/showAllBlogPost")
      .then((res) => {
        const blog = res.data;

        setBlogdata(blog);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/author/:userId")
      .then((res) => {
        const about = res.data;

        setUserInfo(about);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let value = 1;

  // useEffect(()=> {
  //   axios
  //     .get("/getSimilarPosts/:category")
  //     .then((res) => {
  //       const similar = res.data;

  //       setSimilar(similar);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [])
  return (
    <React.Fragment>
      {/* <ReadingProgress target={target}/> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            {blogdata
              .filter((info) => {
                return info.blogId === value;
              })
              .map((data) => {
                return (
                  <BlogPostType
                    key={data.blogId}
                    createdAt={data.createdAt}
                    blogImg={data.blogImg}
                    blogPostAuthor={data.userId}
                    blogContent={data.blogContent}
                    blogTitle={data.blogTitle}
                    category={data.category}
                  />
                );
              })}
            {/* {blogdata.map((blogdata => (

                <BlogPostType 
                      createdAt={blogdata.createdAt}
                      blogImg={blogdata.blogImg}
                      blogPostAuthor={blogdata.blogPostAuthor}
                      blogContent={blogdata.blogContent}
                      blogTitle={blogdata.blogTitle}
                      category={blogdata.category}
                    />
                  )
                ))} */}

            {/* <div className="form">
                <hr style={{ marginTop: "-20px" }} />
                <hr style={{ marginTop: "-14px" }} />
                <form>
                  <textarea
                    placeholder="Leave a Comment"
                    onChange={this.handleChange}
                  />
                  <div className="Post-btn">
                    <input type="submit" value="Post" />
                  </div>
                </form>
              </div> */}
          </div>

          <div className="col-lg-3 col-md-4">
            <RightSideMenuTop
              userId={blogdata.userId}
              authorPicture={userInfo.authorPicture}
              authorName={userInfo.firstName}
              aboutAuthor={userInfo.about}
            />
            <div className="categories row-md-3">
              <hr />
              <h4 className="categories-title border">Categories</h4>
              {category.map((category) => {
                return (
                  <div className="row-md-4">
                    <img
                      src={category.categoryImg}
                      className="img-fluid"
                      alt="cat"
                    />
                    <div className="textblock">
                      <span>{category.categoryName}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <OtherCategories key={category.categoryId} 
                categoryImg={category.categoryImg}
                categoryName={category.categoryName}
              /> */}
            {/* <RightSideMenuBot
                moreCategoryImage={this.state.blogInfo[0].moreCategoryImage}
                latestPostDate={this.state.blogInfo[0].latestPostDate}
                latestPostImage={this.state.blogInfo[0].latestPostImage}
                latestPostName={this.state.blogInfo[0].latestPostName}
                moreCategoryName={this.state.blogInfo[0].moreCategoryName}
              /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogpostComponent;
