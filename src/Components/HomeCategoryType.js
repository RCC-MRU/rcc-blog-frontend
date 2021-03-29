import React, { Component } from "react";
import HealthCard from "./HealthCard";

class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cardData1: [],
        cardData: [
        {
          healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
          healthTitle: "Mood Depends On Food",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
          healthTitle: "Mood Depends On Food",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
            healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
            healthTitle: "Mood Depends On Food",
            healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
            healthDate: "Nov 20, 2020",
          },
          {
            healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
            healthTitle: "Mood Depends On Food",
            healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
            healthDate: "Nov 20, 2020",
          },
          {
            healthImg: process.env.PUBLIC_URL + "images/plate_food.jpg",
            healthTitle: "Mood Depends On Food",
            healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
            healthDate: "Nov 20, 2020",
          },
      ],
    };
  }
  randomCategory(){
    let n=2;
        for( var i=0 ; i<n ; i++){
          var print =Math.floor(Math.random() * this.state.CardData.length);
          if(this.state.CardData1===null){
              this.state.CardData1.push(this.state.CardData[print]); 
          }
          else if(this.state.CardData1[0]===this.state.CardData[print]){
              n = n+1;
              continue;
          }
          else{
              this.state.CardData1.push(this.state.CardData[print]);
          }
        }
  }
  render() {
    const HomeCategoryComponent = ({ homeCategoryName }) => {
      return (
        <React.Fragment>
          <div className="format-div" id="health">
            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-5">
                  <div className="homepage-line-design"></div>
                </div>
                <div className="col-4 col-sm-2">
                  <p className="format-health">{homeCategoryName}</p>
                </div>
                <div className="col-4 col-sm-5">
                  <div className="homepage-line-design"></div>
                </div>
              </div>
            </div>

            <div className="section-spacing-1">
              <div className="container">
                <div className="row">
                  {this.state.cardData1.map((cardData1) => {
                    return (
                      <HealthCard
                        healthImg={cardData1.healthImg}
                        healthDate={cardData1.healthDate}
                        healthText={cardData1.healthText}
                        healthTitle={cardData1.healthTitle}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    };
    return (
      <React.Fragment>
        <HomeCategoryComponent 
            homeCategoryName={this.props.homeCategoryName}
        />
      </React.Fragment>
    );
  }
}
export default HomeCategory;
