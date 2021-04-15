import React, { Component } from "react";
import CategoryType from "./SubComponents/CategoryType"
import RightSideMenuBot from './RightSide/RightSideMenuBot'

class CategoryComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      rightSide:[
        {
          moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          latestPostDate: '20 Nov, 2020',
          latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          moreCategoryName: 'fitness',
          latestPostName:'Add this to your Daily work routine.'
        }
      ],
      categoryData:[
        {
          categoryDate: 'Nov 20, 2020',
          categoryText: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: 'Kunal',
          categoryTitle: 'Add This to your workout routine',
          categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          
        },
        {
          categoryDate: 'Nov 20, 2020',
          categoryText: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: 'Kunal',
          categoryTitle: 'Add This to your workout routine',
          categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          
        },
        {
          categoryDate: 'Nov 20, 2020',
          categoryText: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: 'Kunal',
          categoryTitle: 'Add This to your workout routine',
          categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
        },
        {
          categoryDate: 'Nov 20, 2020',
          categoryText: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: 'Kunal',
          categoryTitle: 'Add This to your workout routine',
          categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          
        },
        {
          categoryDate: 'Nov 20, 2020',
          categoryText: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the`,
          categoryAuthor: 'Kunal',
          categoryTitle: 'Add This to your workout routine',
          categoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
          
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <section id="blogPost">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
              {this.state.categoryData.map((categoryData)=>{
                return(
                  <CategoryType 
                    categoryTitle={categoryData.categoryTitle}
                    categoryAuthor={categoryData.categoryAuthor}
                    categoryDate={categoryData.categoryDate}
                    categoryImage={categoryData.categoryImage}
                    categoryText={categoryData.categoryText}
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
