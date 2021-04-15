import React, { Component } from "react";
import HealthCard from "./HealthCard";

function RandomCategory({ cardData, cardData1 }) {
  let n = 2;
  for (var i = 0; i < n; i++) {
    var print = Math.floor(Math.random() * cardData.length);
    if (cardData1 === null) {
      cardData1.push(cardData[print]);
    } else if (cardData1[0] === cardData[print]) {
      n = n + 1;
      continue;
    } else {
      cardData1.push(cardData[print]);
    }
  }

  return (
    <React.Fragment>
      {cardData1.map((data) => {
        return (
          <HealthCard
            healthImg={data.healthImg}
            healthDate={data.healthDate}
            healthText={data.healthText}
            healthTitle={data.healthTitle}
          />
        );
      })}
    </React.Fragment>
  );
}

class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData1: [],
      cardData: [
        {
          healthImg: `https://source.unsplash.com/1920x1080/?fitness`,
          healthTitle: "Fitness Card - 1",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?fitness`,
          healthTitle: "Fitness Card - 2",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?fitness`,
          healthTitle: "Fitness Card - 3",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?fitness`,
          healthTitle: "Fitness Card - 4",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?fitness`,
          healthTitle: "Fitness Card - 5",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?workout`,
          healthTitle: "Workout Card - 1",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?workout`,
          healthTitle: "Workout Card - 2",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?workout`,
          healthTitle: "Workout Card - 3",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?workout`,
          healthTitle: "Workout Card - 4",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?workout`,
          healthTitle: "Workout Card - 5",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?health`,
          healthTitle: "Health Card - 1",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?health`,
          healthTitle: "Health Card - 2",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?health`,
          healthTitle: "Health Card - 3",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?health`,
          healthTitle: "Health Card - 4",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
        {
          healthImg: `https://source.unsplash.com/1920x1080/?health`,
          healthTitle: "Health Card - 5",
          healthText: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. .`,
          healthDate: "Nov 20, 2020",
        },
      ],
      kuchbhi: props.homeCategoryName,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="format-div" id="health">
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-5">
                <div className="homepage-line-design"></div>
              </div>
              <div className="col-4 col-sm-2">
                <p className="format-health">{this.state.kuchbhi}</p>
                
              </div>
              <div className="col-4 col-sm-5">
                <div className="homepage-line-design"></div>
              </div>
            </div>
          </div>

          <div className="section-spacing-1">
            <div className="container">
              <div className="row">
                <RandomCategory
                  cardData={this.state.cardData}
                  cardData1={this.state.cardData1}
                />
              </div>

                            <div className="readmore-button">
                      <span>
                        <a
                          href="/category"
                          style={{
                            textDecoration: "none",
                            listStyle: "none",
                            color: "white",
                          }}
                        >
                          Read More
                        </a>
                      </span>
                    </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomeCategory;