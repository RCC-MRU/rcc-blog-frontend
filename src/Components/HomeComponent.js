import React, { Component } from "react";
import PopularCard from "./PopularCard";
import LatestPost from "./LatestPost";
import HomeCategory from "./HomeCategoryType";
// import Slider from "react-slick";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postCategory: "workout",
      postAuthor: "Kunal",
      postDate: "Nov 20, 2020",
      postTitle: "Add This to your Daily 20 Min Workout Routine",
      postImage: process.env.PUBLIC_URL + "images/exercise2.jpg",
      postImage2: process.env.PUBLIC_URL + "images/exercise1.jpg",
      CategoryData: [
        {
          homeCategoryName: "Health",
        },
        {
          homeCategoryName: "Fitness",
        },
        {
          homeCategoryName: "Workout",
        },
      ],
      CategoryData1: [],
      data: [
        {
          cardTitle: "Fitness1",
          cardText: "abcdefg",
        },
        {
          cardTitle: "Fitness2",
          cardText: "defgh",
        },
        {
          cardTitle: "Fitness3",
          cardText: "abcdefg",
        },
        {
          cardTitle: "Fitness4",
          cardText: "abcdefg",
        },
      ],
    };
  }
  
  render() {
    // const renderCards=()=>{
    //   this.state.data.map((data) => {
    //     return (
    //       <PopularCard
    //         cardTitle={data.cardTitle}
    //         cardText={data.cardText}
    //       />
    //     );
    //   })
    // }
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
              postCategory={this.state.postCategory}
              postTitle={this.state.postTitle}
              postAuthor={this.state.postAuthor}
              postDate={this.state.postDate}
              postImage={this.state.postImage}
              postImage2={this.state.postImage2}
            />

            {/* <!-- After Most popular card --> */}
            <div>
              <p className="format-heading-2">Most Popular</p>
              <div>
                <hr className="line-class" />
              </div>
            </div>

            <div className="container">
              <div className="row">
              {/* <Slider
                dots={false}
                slidesToShow={4}
                slidesToScroll={2}
                autoplay={true}
                autoplaySpeed={3000}>
                {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                    />
                  );
                })}
                </Slider> */}
                {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                    />
                  );
                })}
                {/* <Slider
                dots={false}
                slidesToShow={4}
                slidesToScroll={2}
                autoplay={true}
                autoplaySpeed={3000}>
                {renderCards()}
                </Slider> */}

              </div>
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
