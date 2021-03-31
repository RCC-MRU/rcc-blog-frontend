import React, { Component } from "react";
import PopularCard from "./PopularCard";
import LatestPost from "./LatestPost";
import HomeCategory from "./HomeCategoryType";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardTitle: "Fitness2",
          cardText: "defgh",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardTitle: "Fitness3",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardTitle: "Fitness4",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
        {
          cardTitle: "Fitness4",
          cardText: "abcdefg",
          cardImg: process.env.PUBLIC_URL + "images/exercise2.jpg",
        },
      ],
    };
  }
  
  render() {
    const settings={
      dots: true,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      responsive:[
        {
          breakpoint: 769,
          settings:{
            slidesToShow: 2,
          }
        },
        {breakpoint: 467,
        settings:{
          slidesToShow:1,
        }
        }
      ]
    }
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

            {/* <div className="container"> */}
              <Slider {...settings} className="card border-0">
              {/* <div className="row"> */}
              {/* <div className="col-12 col-sm-3 d-flex justify-content-center"> */}
              {/* <div className="card border-0"> */}


                {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                      cardImg={data.cardImg}
                    />
                  );
                })}
              {/* </div> */}
              {/* </div> */}
                {/* {this.state.data.map((data) => {
                  return (
                    <PopularCard
                      cardTitle={data.cardTitle}
                      cardText={data.cardText}
                    />
                  );
                })} */}
                {/* <Slider
                dots={false}
                slidesToShow={4}
                slidesToScroll={2}
                autoplay={true}
                autoplaySpeed={3000}>
                {renderCards()}
                </Slider> */}

              {/* </div> */}
                </Slider>
            {/* </div> */}

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
