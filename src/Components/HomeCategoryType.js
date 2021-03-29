import React, { Component } from "react";
import HealthCard from "./HealthCard";

class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
    };
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
                  {this.state.cardData.map((cardData) => {
                    return (
                      <HealthCard
                        healthImg={cardData.healthImg}
                        healthDate={cardData.healthDate}
                        healthText={cardData.healthText}
                        healthTitle={cardData.healthTitle}
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
