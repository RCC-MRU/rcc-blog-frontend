import React, { useState, useEffect } from "react";
import BlogPostType from "./SubComponents/BlogPostType";
import RightSideMenuTop from "./RightSide/RightSideMenuTop";
// import RightSideMenuBot from "./RightSide/RightSideMenuBot";
// import ReadingProgress from "./SubComponents/ReadingBar";
import axios from "axios";

// function alpha(string)
// {
//     var a= string;
//     var output="";
//     for(var x=0;x<a.length;x++)
//             output+=String.fromCharCode(a.charCodeAt(x)>65 && a.charCodeAt(x)<90 ? a.charCodeAt(x)+32: a.charCodeAt(x))
//             // return output;
//     console.log(output);
// }
const BlogpostComponent = (props) => {
  const [blogdata, setBlogdata] = useState({});
  const [category, setCategory] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [similar, setSimilar] = useState([])
  
  // let slug = "no-running-cardio-workout";

  useEffect(() => {
    // fetching data
    axios
      .get("/blogs/showCategoryMaster")
      .then((res) => {
        const about = res.data;
        // console.log(about);
        setCategory(about);
      })
      .catch((err) => {
        console.log(err);
      });
//  const data= new Array(blogdata)
    axios
      .get(`/blogs/showSingleBlogPost/`+props.match.params.slug)
      .then((res) => {
        const blog = res.data.data;

        // console.log(blog);
        setBlogdata(blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.slug] );
  // console.log({blogdata});
  // var result = Object.keys(blogdata).map((key) => [Number(blogdata), blogdata[key]]);
  // console.log(result);
  useEffect(() => {
    axios
      .get(`/routes/author/${blogdata.userId}`)
      .then((resp) => {
        const authorDetails = resp.data.details;
        // console.log(authorDetails);

        setAuthorData(authorDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blogdata.userId]);

  
  useEffect(() => {
    axios
      .get(`/blogs/showSimilarPosts/${blogdata.category}`)
      .then((resp) => {
        const authorDetails = resp.data.detail;
        // console.log(authorDetails);

        setSimilar(authorDetails);
        // console.log(authorDetails);
      })
      .catch((err) => {
        console.log(err);
      });
    },[blogdata.category]);
    
    // console.log(similar);

  // console.log("line 53 blog", blogdata);

  return (
    <React.Fragment>
      {/* <ReadingProgress target={target}/> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
          {/* {result.map((blogdata)=>{
            return(

            );
          })} */}
            <BlogPostType
              // key={blogdata.blogId}
              createdAt={blogdata.createdAt}
              blogImg={blogdata.blogImg}
              blogPostAuthor={blogdata.userId}
              blogContent={blogdata.blogContent}
              blogTitle={blogdata.blogTitle}
              category={blogdata.category}
            />
            {/* <BlogPostType propss={blogdata}/> */}

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
            {authorData.map((authData) => {
              return (
                <RightSideMenuTop
                  userId={authData.userId}
                  firstName={authData.firstName}
                  about={authData.about}
                  profileImg={authData.profileImg}
                />
              );
            })}

            <div className="categories row-md-3">
              <hr />
              <h4 className="categories-title border">Categories</h4>
              {category.map((category) => {
                return (
                  <div className="row-md-4" key={category.categoryId}>
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

              <div className="categories row-md-3">
              <hr />
              <h4 className="categories-title border">Latest Posts</h4>

              <div className="row">
              {similar.map((data)=>{
                return(
                  <>
                  <div className="col-md-6">
            <img
              src={data.blogImg}
              className="img-fluid"
              alt="latest-post"
            />
          </div>
          <div className="col-md-6">
            <h6>{data.blogTitle}</h6>
            <p>{new Date(data.createdAt).toLocaleDateString()}</p>
          </div>
                  </>
                );
              })}
              </div>
              </div>
                  {/* <RightSideMenuBot 
                    createdAt={data.createdAt}
                    blogImg={data.blogImg}
                  /> */}


            {/* <RightSideMenuBot
                moreCategoryImage={this.state.blogInfo[0].moreCategoryImage}
                latestPostDate={this.state.blogInfo[0].latestPostDate}
                latestPostImage={this.state.blogInfo[0].latestPostImage}
                latestPostName={this.state.blogInfo[0].latestPostName}
                moreCategoryName={this.state.blogInfo[0].moreCategoryName}
                category={blogdata.category}
              /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogpostComponent;
