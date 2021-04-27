import React, { Component } from "react";
import CategoryType from "./SubComponents/CategoryType";
import RightSideMenuBot from "./RightSide/RightSideMenuBot";

class CategoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeCategoryName: null,
      rightSide: [
        {
          moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          latestPostDate: "20 Nov, 2020",
          latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          moreCategoryName: "fitness",
          latestPostName: "Add this to your Daily work routine.",
        },
      ],

      categoryData: [
        {
          createdAt: "Nov 20, 2020",
          blogContent: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: "Kunal",
          blogTitle: "Add This to your workout routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          createdAt: "Nov 30, 2020",
          blogContent: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: "Kunal",
          blogTitle: "Add This to your workout routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          createdAt: "Dec 10, 2020",
          blogContent: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: "Kunal",
          blogTitle: "Add This to your workout routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          createdAt: "Dec 20, 2020",
          blogContent: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: "Kunal",
          blogTitle: "Add This to your workout routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          createdAt: "Dec 30, 2020",
          blogContent: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: "Kunal",
          blogTitle: "Add This to your workout routine",
          blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="rectangle-nav">
          <p className="category-rectangle">Category</p>
          <p className="fitness-rectangle">Fitness</p>
        </div>

        <section id="blogPost">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                {this.state.categoryData.map((categoryData) => {
                  return (
                    <CategoryType
                    blogTitle={categoryData.blogTitle}
                      categoryAuthor={categoryData.categoryAuthor}
                      createdAt={categoryData.createdAt}
                      blogImg={categoryData.blogImg}
                      blogContent={categoryData.blogContent}
                    />
                  );
                })}
              </div>

              <div className="col-md-3">
                <RightSideMenuBot
                  moreCategoryImage={this.state.rightSide[0].moreCategoryImage}
                  latestPostDate={this.state.rightSide[0].latestPostDate}
                  latestPostImage={this.state.rightSide[0].latestPostImage}
                  latestPostName={this.state.rightSide[0].latestPostName}
                  moreCategoryName={this.state.rightSide[0].moreCategoryName}
                />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CategoryComponent;
