import React, { useEffect, useState } from "react";
import CategoryType from "./SubComponents/CategoryType";
import OtherCategories from "./RightSide/OtherCategories";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryComponent = () => {
  const [category, setCategory] = useState([]);
  const [otherCategory, setOtherCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`/blogs/showBlogsByCategory/health`)
      .then((res) => {
        const about = res.data.data;
        // console.log(about);
        setCategory(about);
      })
      .catch((err) => {
        console.log(err);
      });
  } , []);
  useEffect(() => {
    axios
      .get("/blogs/showCategoryMaster")
      .then((res) => {
        const result = res.data.data;
        setOtherCategory(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="rectangle-nav">
        <p className="category-rectangle">Category</p>
        <p className="fitness-rectangle">Fitness</p>
      </div>

      <section id="blogPost">
        <div className="container">
          {/* <ReadingProgress /> */}
          <div className="row">
            <div className="col-md-9">
              {category.map((categoryData) => {
                return (
                  // <a
                  //   href={"/blog/" + categoryData.slug}
                  //   key={categoryData.blogId}
                  // >
                  <Link
                  to={"/blog/" + categoryData.slug}
                  style={{ textDecoration: "none", color: "#000" }}
                  target="_blank"
              rel="noopener noreferrer"
                >

                    <CategoryType
                      blogTitle={categoryData.blogTitle}
                      categoryAuthor={categoryData.categoryAuthor}
                      createdAt={categoryData.createdAt}
                      blogImg={categoryData.blogImg}
                      blogContent={categoryData.blogContent}
                    />
                </Link>
                  // </a>
                );
              })}
            </div>
            <div className="col-md-3">
              <div className="row-md-3 categories">
                <hr />
                <h4 className="connectAndFollow-title border">
                  Connect And Follow
                </h4>
                <div className="social-blogpost">
                  <div>
                    <i className="fab fa-facebook-f socials"></i>
                  </div>
                  <div>
                    <i className="fab fa-instagram socials"></i>
                  </div>
                  <div>
                    <i className="fab fa-google-plus socials"></i>
                  </div>
                  <div>
                    <i className="fab fa-twitter socials"></i>
                  </div>
                  <div>
                    <i className="fa fa-rss-square"></i>
                  </div>
                </div>
              </div>
              <div className="categories row-md-3">
                <hr />
                <h4 className="categories-title border">Categories</h4>
                <OtherCategories category={otherCategory} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CategoryComponent;
