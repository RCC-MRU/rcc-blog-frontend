import React, { Component } from "react";

import LatestCard from "./HomePageComponents/LatestCard";
import HomeCategory from "./HomePageComponents/HomeCategoryType";
import SlickSlider from "./HomePageComponents/SlickSlider";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feature: [
        {
          blogId: 1,
          category: "workblog",
          postAuthor: "Kunal",
          createdAt: "Nov 20, 2020",
          blogTitle: "Add This to your Daily 20 Min Workout Routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
          blogImg2: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          blogId: 2,
          category: "workout2",
          postAuthor: "Kunal",
          createdAt: "Nov 20, 2020",
          blogTitle: "Add This to your Daily 20 Min Workout Routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
          blogImg2: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
      ],
      CategoryData: [
        {
          id: 1,
          homeCategoryName: "Health",
          homecategoryUrl: "health",
        },
        {
          id: 2,
          homeCategoryName: "Fitness",
          homecategoryUrl: "fitness",
        },
        {
          id: 3,
          homeCategoryName: "Workout",
          homecategoryUrl: "workout",
        },
      ],
      data: [
        {
          blogId: 1,
          blogTitle: "Fitness1",
          category: "Fitness",
          blogImg: `https://source.unsplash.com/1080x1920/?fitness`,
        },
        {
          blogId: 2,
          blogTitle: "Fitness2",
          category: "Fitness",
          blogImg: `https://source.unsplash.com/1080x1920/?health`,
        },
        {
          blogId: 3,
          blogTitle: "Health1",
          category: "Health",
          blogImg: `https://source.unsplash.com/1080x1920/?workout`,
        },
        {
          blogId: 4,
          blogTitle: "Workout1",
          category: "Workout",
          blogImg: `https://source.unsplash.com/1080x1920/?excersize`,
        },
        {
          blogId: 5,
          blogTitle: "Fitness3",
          category: "Fitness",
          blogImg: `https://source.unsplash.com/1080x1920/?yoga`,
        },
        {
          blogId: 6,
          blogTitle: "Workout2",
          category: "Workout",
          blogImg: `https://source.unsplash.com/1080x1920/?workout`,
        },
        {
          blogId: 7,
          blogTitle: "Health3",
          category: "Health",
          blogImg: `https://source.unsplash.com/random`,
        },
        {
          blogId: 8,
          blogTitle: "Workout3",
          category: "Workout",
          blogImg: `https://source.unsplash.com/aerobic`,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="spacing-section">
            {/* first three pics  */}
            <h1 className="format-heading-2">Featured blogs</h1>
            <div>
              <hr className="line-class" />
            </div>

            <LatestCard
              category={this.state.feature[0].category}
              blogTitle={this.state.feature[0].blogTitle}
              postAuthor={this.state.feature[0].postAuthor}
              createdAt={this.state.feature[0].createdAt}
              blogImg={this.state.feature[0].blogImg}
              blogImg2={this.state.feature[0].blogImg2}
            />

            {/* <!-- After Most popular card --> */}
            <div>
              <p className="format-heading-2">Most Popular</p>
              <div>
                <hr className="line-class" />
              </div>
            </div>

            <div className="container">
              <SlickSlider popularCardData={this.state.data} />
            </div>

            {/*  <!-- After health div --> */}

            {this.state.CategoryData.map((Cate) => {
              return (
                <HomeCategory
                  homeCategoryName={Cate.homeCategoryName}
                  homecategoryUrl={Cate.homecategoryUrl}
                />
              );
            })}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

const obj = new HomeComponent();
export const CatData = obj.state.CategoryData;
