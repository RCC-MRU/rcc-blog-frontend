import React, { Component } from "react";

import LatestPost from "./HomePageComponents/LatestPost";
import HomeCategory from "./HomePageComponents/HomeCategoryType";
import SlickSlider from "./SlickSlider";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feature: [
        {
          postID: 1,
          postCategory: "workout1",
          postAuthor: "Kunal",
          postDate: "Nov 20, 2020",
          postTitle: "Add This to your Daily 20 Min Workout Routine",
          postImage: process.env.PUBLIC_URL + "images/exercise2.jpg",
          postImage2: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          postID: 2,
          postCategory: "workout2",
          postAuthor: "Kunal",
          postDate: "Nov 20, 2020",
          postTitle: "Add This to your Daily 20 Min Workout Routine",
          postImage: process.env.PUBLIC_URL + "images/exercise2.jpg",
          postImage2: process.env.PUBLIC_URL + "images/exercise1.jpg",
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
          cardID: 1,
          cardTitle: "Fitness1",
          cardText: "Post 1",
          cardImg: `https://source.unsplash.com/1080x1920/?fitness`,
        },
        {
          cardID: 2,
          cardTitle: "Fitness2",
          cardText: "Post 2",
          cardImg: `https://source.unsplash.com/1080x1920/?health`,
        },
        {
          cardID: 3,
          cardTitle: "Fitness3",
          cardText: "Post 3",
          cardImg: `https://source.unsplash.com/1080x1920/?workout`,
        },
        {
          cardID: 4,
          cardTitle: "Fitness4",
          cardText: "Post 4",
          cardImg: `https://source.unsplash.com/1080x1920/?excersize`,
        },
        {
          cardID: 5,
          cardTitle: "Fitness5",
          cardText: "Post 5",
          cardImg: `https://source.unsplash.com/1080x1920/?yoga`,
        },
        {
          cardID: 6,
          cardTitle: "Fitness6",
          cardText: "Post 6",
          cardImg: `https://source.unsplash.com/1080x1920/?workout`,
        },
        {
          cardID: 7,
          cardTitle: "Fitness7",
          cardText: "Post 7",
          cardImg: `https://source.unsplash.com/random`,
        },
        {
          cardID: 8,
          cardTitle: "Fitness8",
          cardText: "Post 8",
          cardImg: `https://source.unsplash.com/aerobic`,
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

            <LatestPost
              postCategory={this.state.feature[0].postCategory}
              postTitle={this.state.feature[0].postTitle}
              postAuthor={this.state.feature[0].postAuthor}
              postDate={this.state.feature[0].postDate}
              postImage={this.state.feature[0].postImage}
              postImage2={this.state.feature[0].postImage2}
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
