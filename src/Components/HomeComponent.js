import React, { Component } from "react";
import PopularCard from "./PopularCard";
import LatestPost from "./LatestPost";
import HomeCategory from "./HomeCategoryType";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        padding: "1px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        padding: "1px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

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
          homecategoryUrl: "/home#fitness",
        },
        {
          id: 2,
          homeCategoryName: "Fitness",
          homecategoryUrl: "/home#health",
        },
        {
          id: 3,
          homeCategoryName: "Workout",
          categoryUrl: "/home#workout",
        },
      ],
      CategoryData1: [],
      data: [
        {
          cardID: 1,
          cardTitle: "Fitness1",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 2,
          cardTitle: "Fitness2",
          cardText: "defgh",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 3,
          cardTitle: "Fitness3",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 4,
          cardTitle: "Fitness4",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 5,
          cardTitle: "Fitness5",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 6,
          cardTitle: "Fitness6",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 7,
          cardTitle: "Fitness7",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardID: 8,
          cardTitle: "Fitness8",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

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
              <Slider {...settings} className="card border-0">
                {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardID={data.cardID}
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                      cardImg={data.cardImg}
                    />
                  );
                })}
              </Slider>
            </div>

            {/*  <!-- After health div --> */}

            {this.state.CategoryData.map((CategoryData1) => {
              return (
                <HomeCategory
                  homeCategoryName={CategoryData1.homeCategoryName}
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
console.log("224 line", obj.state.CategoryData);
export const CatData = obj.state.CategoryData;