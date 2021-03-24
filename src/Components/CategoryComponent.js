import React, { Component } from "react";
import CategoryType from "./CategoryType"
import RightMenu from './RightSideMenu'

class CategoryComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      categoryName: 'Fitness',
      categoryDate: 'Nov 20, 2020',
      categoryText: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the`,
      categoryAuthor: 'Kunal',
      categoryTitle: 'Add This to your workout routine',
      categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      authorPicture: process.env.PUBLIC_URL + "images/exercise2.jpg",
      authorName: 'Kunal',
      aboutAuthor: 'Lorem ipsum dolor set amet sity',
      moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      latestPostDate: '20 Nov, 2020',
      latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
      moreCategoryName: 'fitness',
      latestPostName:'Add this to your Daily work routine.'
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="rectangle-nav">
          <p className="category-rectangle">Category</p>
          <p className="fitness-rectangle">Fitness</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section id="blogPost">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <CategoryType 
                  categoryName={this.state.categoryName}
                  categoryTitle={this.state.categoryTitle}
                  categoryAuthor={this.state.categoryAuthor}
                  categoryDate={this.state.categoryDate}
                  categoryImage={this.state.categoryImage}
                  categoryText={this.state.categoryText}
                />
                <CategoryType 
                  categoryName={this.state.categoryName}
                  categoryTitle={this.state.categoryTitle}
                  categoryAuthor={this.state.categoryAuthor}
                  categoryDate={this.state.categoryDate}
                  categoryImage={this.state.categoryImage}
                  categoryText={this.state.categoryText}
                />
                <CategoryType 
                  categoryName={this.state.categoryName}
                  categoryTitle={this.state.categoryTitle}
                  categoryAuthor={this.state.categoryAuthor}
                  categoryDate={this.state.categoryDate}
                  categoryImage={this.state.categoryImage}
                  categoryText={this.state.categoryText}
                />
                
              </div>

              <div className="col-md-3">
              <RightMenu 
                authorPicture={this.state.authorPicture}
                authorName={this.state.authorName}
                aboutAuthor={this.state.aboutAuthor}
                moreCategoryImage={this.state.moreCategoryImage}
                latestPostDate={this.state.latestPostDate}
                latestPostImage={this.state.latestPostImage}
                latestPostName={this.state.latestPostName}
                moreCategoryName={this.state.moreCategoryName}
              />
                {/* <div className="row-md-3">
                  <hr />
                  <h4 className="border">About</h4>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/exercise2.jpg"
                    }
                    width="auto"
                    height="227px"
                    className="img-fluid"
                    alt="fitness"
                  />
                  <p style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    I am x y z <br />
                    bkvabhabuhvawebubdbhva
                  </p>
                  <h5
                    style={{
                      fontFamily: "Red Hat Text, sans-serif",
                      size: "23px",
                      color: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    Read More
                  </h5>
                </div> */}

                {/* <div className="row-md-3">
                  <hr />
                  <h4 className="connectAndFollow-title border">
                    Connect And Follow
                  </h4>
                  <div className="social-blogpost">
                    <div>
                      <i className="fa fa-facebook-f socials"></i>
                    </div>
                    <div>
                      <i className="fa fa-instagram socials"></i>
                    </div>
                    <div>
                      <i className="fa fa-google-plus socials"></i>
                    </div>
                    <div>
                      <i className="fa fa-twitter socials"></i>
                    </div>
                    <div>
                      <i className="fa fa-rss-square"></i>
                    </div>
                  </div>
                </div> */}

                {/* <div className="categories row-md-3">
                  <hr />
                  <h4 className="categories-title border">Categories</h4>
                  <div className="row-md-4">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="cat"
                    />
                    <div className="textblock">
                      <span>fitness</span>
                    </div>
                  </div>
                  <div className="row-md-4">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="pic"
                    />
                    <div className="textblock">
                      <span>workout</span>
                    </div>
                  </div>
                  <div className="row-md-4">
                    <img
                      src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                      className="img-fluid"
                      alt="work-out"
                    />
                    <div className="textblock">
                      <span>health</span>
                    </div>
                  </div>
                </div> */}

                {/* <div className="latestPosts row-md-3">
                  <hr />
                  <h4 className="latestPosts-title border">Latest Posts</h4>
                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                        className="img-fluid"
                        alt="latest-post"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>Add this to your workout routine</h6>
                      <p>NOV 26 , 2020</p>
                    </div>
                  </div>

                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                        className="img-fluid"
                        alt="workout-routine"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>Add this to your workout routine</h6>
                      <p>NOV 26 , 2020</p>
                    </div>
                  </div>

                  <div className="row-md-4">
                    <div className="col-md-6">
                      <img
                        src={process.env.PUBLIC_URL + "images/exercise1.jpg"}
                        className="img-fluid"
                        alt="wk-route"
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>Add this to your workout routine</h6>
                      <p>NOV 26 , 2020</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CategoryComponent;
