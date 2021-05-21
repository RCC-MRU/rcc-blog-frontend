import React, { useState, useEffect } from "react";
import axios from "axios";
import FeaturedCard from "./HomePageComponents/FeaturedCard";
import SlickSlider from "./HomePageComponents/SlickSlider";
import DisplayCard from "./HomePageComponents/DisplayCard";

const HomeComponent = () => {
  const [featured, setFeaturedPosts] = useState([]);
  const [popular, setPopular] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // api to get featured posts
    axios
      .get("/blogs/showFeatured")
      .then((res) => {
        const data = res.data.data;
        // console.log(data);
        setFeaturedPosts(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      } , []);

    // api to get categories
    axios
      .get("/blogs/showCategoryMaster")
      .then((res) => {
        const categories = res.data.data;

        setCategoryData(categories);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      }, []);

    // api to get popular posts
    axios
      .get("/blogs/showPopular")
      .then((res) => {
        const data = res.data.data;
        // console.log(data);

        setPopular(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <section className="spacing-section">
          {/* first three pics  */}
          <h1 className="format-heading-2">Featured Posts</h1>
          <div>
            <hr className="line-class" />
          </div>

          <div className="row">
            {featured.map((feature) => {
              return (
                <div className="col-md-4 my-1 px-1" key={feature.blogId}>
                <a href={'/blog/'+feature.slug}>

                  <FeaturedCard
                    
                    category={feature.category}
                    blogTitle={feature.blogTitle}
                    createdAt={feature.createdAt}
                    blogImg={feature.blogImg}
                    authorName={feature.firstName}
                  />
                </a>
                </div>
              );
            })}
          </div>

          {/* <!-- After Most popular card --> */}
          <div>
            <p className="format-heading-2">Most Popular</p>
            <div>
              <hr className="line-class" />
            </div>
          </div>

          <div className="container">
            <SlickSlider popularCardData={popular} />
          </div>

          {/*  <!-- After health div --> */}

          <div className="format-div">
            <div className="container">
              {categoryData.map((category) => {
                return (
                  <React.Fragment key={category.categoryId}>
                    <div
                      style={{ height: "2rem" }}
                      id={category.categoryValue}
                      
                    ></div>
                    <div className="row" id={category.categoryValue}>
                      <div className="col-4 col-sm-5">
                        <div className="homepage-line-design"></div>
                      </div>
                      <div className="col-4 col-sm-2">
                        <p className="format-health">{category.categoryName}</p>
                      </div>
                      <div className="col-4 col-sm-5">
                        <div className="homepage-line-design"></div>
                      </div>
                    </div>
                    <DisplayCard
                      cardCategory={category.categoryName}
                      categoryID={category.categoryId}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
