import React, { useState, useEffect } from "react";
import BlogPostType from "./SubComponents/BlogPostType";
import RightSideMenuTop from "./RightSide/RightSideMenuTop";
import RightSideMenuBot from "./RightSide/RightSideMenuBot";
import OtherCategories from "./RightSide/OtherCategories";
import { Link } from "react-router-dom";
// import ReadingProgress from "./SubComponents/ReadingBar";
import axios from "axios";

const BlogpostComponent = (props) => {
  const [blogdata, setBlogdata] = useState({});
  const [category, setCategory] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    // fetching data
    axios
      .get("/blogs/showCategoryMaster")
      .then((res) => {
        const about = res.data.data;
        // console.log(about);
        setCategory(about);
      })
      .catch((err) => {
        console.log(err);
      }, []);
    //  const data= new Array(blogdata)
    axios
      .get(`/blogs/showSingleBlogPost/` + props.match.params.slug)
      .then((res) => {
        const blog = res.data.data;

        // console.log(blog);
        setBlogdata(blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.slug]);
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
  }, [blogdata.category]);
  // console.log( category[0].categoryName);
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
          </div>

          <div className="col-lg-3 col-md-4">
            {authorData.map((authData) => {
              return (
                <RightSideMenuTop
                  key={authData.userId}
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
              <OtherCategories category={category} />
            </div>

            <div className=" latestPosts row-md-3">
              <hr />
              <h4 className=" latestPosts-title border">Latest Posts</h4>

              {similar.map((data) => {
                return (
                  <Link
                    to={"/blog/" + data.slug}
                    key={data.blogId}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <RightSideMenuBot
                      blogImg={data.blogImg}
                      blogTitle={data.blogTitle}
                      createdAt={data.createdAt}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogpostComponent;
