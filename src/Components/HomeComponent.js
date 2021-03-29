import React, { Component } from "react";
import PopularCard from "./PopularCard";
// import HealthCard from "./HealthCard";
import LatestPost from "./LatestPost";
import HomeCategory from "./HomeCategoryType";

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
          homeCategoryName: "Health"
        }, 
        {
          homeCategoryName: "Fitness"
        }, 
        {
          homeCategoryName: "Workout"
        }],
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
    return (
      <React.Fragment>
        <div className="container">
          <section className="spacing-section">
            {/* first three pics  */}
            <h1 className="format-heading-2 text-left">Featured blogs</h1>

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
                {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                    />
                  );
                })}
              </div>
            </div>

            {/*  <!-- After health div --> */}

            {this.state.CategoryData.map((CategoryData) => {
              return <HomeCategory homeCategoryName={CategoryData.homeCategoryName} />;
            })}

            {/* <div className="format-div" id="health">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                  <div className="col-4 col-sm-2">
                    <p className="format-health">Health</p>
                  </div>
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                </div>
              </div>

              <div className="section-spacing-1">
                <div className="container">
                  <div className="row">
                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />

                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="format-div" id="fitness">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                  <div className="col-4 col-sm-2">
                    <p className="format-health">Fitness</p>
                  </div>
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                </div>
              </div>

              <div className="section-spacing-1">
                <div className="container">
                  <div className="row">
                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />

                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="format-div" id="workout">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                  <div className="col-4 col-sm-2">
                    <p className="format-health">Workout</p>
                  </div>
                  <div className="col-4 col-sm-5">
                    <div className="homepage-line-design"></div>
                  </div>
                </div>
              </div>

              <div className="section-spacing-1">
                <div className="container">
                  <div className="row">
                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />

                    <HealthCard
                      healthImg={this.state.healthImg}
                      healthTitle={this.state.healthTitle}
                      healthText={this.state.healthText}
                      healthDate={this.state.healthDate}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
