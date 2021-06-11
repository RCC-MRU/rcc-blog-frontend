import React, { useState, useEffect } from "react";
import BlogPostType from "./SubComponents/BlogPostType";
import RightSideMenuTop from "./RightSide/RightSideMenuTop";
import RightSideMenuBot from "./RightSide/RightSideMenuBot";
import OtherCategories from "./RightSide/OtherCategories";
// import ReadingProgress from "./SubComponents/ReadingBar";

import { Link } from "react-router-dom";

import {
  showSingleBlogPost,
  showCategoryMaster,
  showAuthor,
  showSimilarPosts,
} from "../Util/axios";

// const userName =() =>{

// }

const BlogpostComponent = (props) => {
  const [blogdata, setBlogdata] = useState({});
  const [category, setCategory] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [similar, setSimilar] = useState([]);

  console.log(props);
  useEffect(() => {
    // fetching data
    // axios
    //   .get("/blogs/showCategoryMaster")
    //   .then((res) => {
    //     const about = res.data.data;
    //     setCategory(about);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   }, []);

    // axios
    //   .get(`/blogs/showSingleBlogPost/` + props.match.params.slug)
    //   .then((res) => {
    //     const blog = res.data.data;

    //     setBlogdata(blog);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    showCategoryMaster()
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));

    showSingleBlogPost(props.match.params.slug)
      .then((data) => setBlogdata(data))
      .catch((err) => console.log(err));

    showAuthor(blogdata.userId)
      .then((data) => setAuthorData(data))
      .catch((err) => console.log(err));

    showSimilarPosts(blogdata.slug)
      .then((data) => setSimilar(data))
      .catch((err) => console.log(err));
  }, [props.match.params.slug, blogdata.userId, blogdata.slug]);

  // useEffect(() => {
  //   // axios
  //   //   .get(`/routes/author/${blogdata.userId}`)
  //   //   .then((resp) => {
  //   //     const authorDetails = resp.data.details;
  //   //     console.log(authorDetails);
  //   //     setAuthorData(authorDetails);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // }, [blogdata.userId]);

  // useEffect(() => {
  //   // axios
  //   //   .get(`/blogs/showSimilarPosts/${blogdata.category}`)
  //   //   .then((resp) => {
  //   //     const similarData = resp.data.detail;
  //   //     setSimilar(similarData);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // }, [blogdata.category]);

  // console.log(authorData[0]?.firstName);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <BlogPostType
              createdAt={blogdata.createdAt}
              blogImg={blogdata.blogImg}
              blogContent={blogdata.blogContent}
              blogTitle={blogdata.blogTitle}
              category={blogdata.category}
              likes={blogdata.likes}
              blogPostAuthor={authorData[0]?.firstName}
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
              <h4 className=" latestPosts-title border">Similar Posts</h4>

              {similar.map((data) => {
                return (
                  <Link
                    to={"/blog/" + data.slug}
                    key={data.blogId}
                    rel="noopener noreferrer"
                    className="Link-highlight"
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
