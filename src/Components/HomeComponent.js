import React, { Component } from "react";
import PopularCard from "./PopularCard";
import HealthCard from "./HealthCard";
import LatestPost from "./LatestPost";
class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
      healthTitle: "Mood Depends On Food",
      healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. .`,
      healthDate: "Nov 20, 2020",
      postCategory: "workout",
      postAuthor: "Kunal",
      postDate: "Nov 20, 2020",
      postTitle: "Add This to your Daily 20 Min Workout Routine",
      postImage: process.env.PUBLIC_URL + "images/exercise2.jpg",
      postImage2: process.env.PUBLIC_URL + "images/exercise1.jpg",
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
                {/* <PopularCard cardTitle="Fitness2" cardText="Lorem Ipsum" />
                <PopularCard cardTitle="Fitness3" cardText="Lorem Ipsum" />
                <PopularCard cardTitle="Fitness4" cardText="Lorem Ipsum" /> */}
              </div>
            </div>

            {/*  <!-- After health div --> */}

            <div className="format-div" id="health">
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
            </div>

            <div className="format-div" id="fitness">
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
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
