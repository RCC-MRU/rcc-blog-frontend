import React, { useState, useEffect } from "react";
import axios from "axios";
import LatestCard from "./HomePageComponents/LatestCard";
import HomeCategory from "./HomePageComponents/HomeCategoryType";
import SlickSlider from "./HomePageComponents/SlickSlider";

const HomeComponent = () => {
  const [feature, setFeature] = useState([]);
  const [popular, setPopular] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("/featuredPosts")
      .then((res) => {
        const data = res.data;
        // console.log(data);

        setFeature(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

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
          <h1 className="format-heading-2">Featured blogs</h1>
          <div>
            <hr className="line-class" />
          </div>

          <div className="row">
            {feature.map((feature) => {
              return (
                <div className="col-md-4 my-1 px-1" key={feature.id}>
                  <LatestCard
                  key={feature.id}
                    category={feature.category}
                    blogTitle={feature.blogTitle}
                    createdAt={feature.createdAt}
                    blogImg={feature.blogImg}
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

          {categoryData.map((Cate) => {
            return (
              <HomeCategory
                key={Cate.id}
                homeCategoryName={Cate.categoryValue}
                homecategoryUrl={Cate.slug}
              />
            );
          })}
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
