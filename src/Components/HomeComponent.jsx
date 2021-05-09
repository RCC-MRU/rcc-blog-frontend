import React, { useState, useEffect } from "react";
import axios from "axios";
import LatestCard from "./HomePageComponents/LatestCard";
// import HomeCategory from "./HomePageComponents/HomeCategoryType";
import SlickSlider from "./HomePageComponents/SlickSlider";
import SomeCard from "./SomeCard";

const HomeComponent = () => {
  const [feature, setFeature] = useState([]);
  const [popular, setPopular] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // api to get featured posts
    axios
      .get("/getFeaturedPost")
      .then((res) => {
        const data = res.data;
        // console.log(data);

        setFeature(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    // api to get categories
    axios
      .get("/showCategoryMaster")
      .then((res) => {
        const categories = res.data;

        setCategoryData(categories);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    // api to get popular posts
    axios
      .get("/showPopular")
      .then((res) => {
        const data = res.data;
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
          <h1 className="format-heading-2">Latest blogs</h1>
          <div>
            <hr className="line-class" />
          </div>

          <div className="row">
            {feature.map((feature) => {
              return (
                <div className="col-md-4 my-1 px-1">
                  <LatestCard
                    key={feature.blogId}
                    category={feature.category}
                    blogTitle={feature.blogTitle}
                    createdAt={feature.createdAt}
                    blogImg={feature.blogImg}
                    authorName={feature.firstName}
                  />
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
                  <React.Fragment>
                    <div
                      style={{ marginTop: "20px" }}
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
                    <SomeCard
                      cardCategory={category.categoryName}
                      categoryID={category.categoryId}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* {categoryData.map((Cate) => {
            return (
              <HomeCategory
                homeCategoryName={Cate.categoryValue}
                homecategoryUrl={Cate.slug}
              />
            );
          })} */}
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
