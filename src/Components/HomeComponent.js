import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
         

          <section className="spacing-section">

          {/* first three pics  */}
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 my-1 px-1">
                  <div className="banner-img-left" style={{backgroundImage: "url('images/exercise1.jpg')"}}>
                    <div className="centered">
                      <button className="btn btn-black btn-sm text-white">
                        workout
                      </button>
                      <p>Add This to your Daily 20 Min Workout Routine</p>
                      <p className="edit-font">Kunal - Nov 20, 2020</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-1">
                  <div className="row">
                    <div className="col-6 px-2">
                      <div className="banner-img-right" style={{backgroundImage: "url('images/exercise2.jpg')"}}>
                        <div className="centered">
                          <button className="btn btn-black btn-sm text-white">
                            workout
                          </button>
                          <p>Add This to your Daily 20 Min Workout Routine</p>
                          <p className="edit-font">Kunal - Nov 20, 2020</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 px-2">
                      <div className="banner-img-right" style={{backgroundImage: "url('images/exercise2.jpg')"}}>
                        <div className="centered">
                          <button className="btn btn-black btn-sm text-white">
                            workout
                          </button>
                          <p>Add This to your Daily 20 Min Workout Routine</p>
                          <p className="edit-font">Kunal - Nov 20, 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- After Most popular card --> */}
            <div>
              <p className="format-heading-2">Most Popular</p>
              <div>
                <hr className="line-class" />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                  <div className="card border-0">
                    <img
                      className="card-img-top format-card-image"
                      src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
                      alt="home"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title format-text-popular">
                        Fitness
                      </h4>
                      <p className="card-text format-text-para">
                        Lorem Ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                  <div className="card border-0">
                    <img
                      className="card-img-top format-card-image"
                      src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
                      alt="home"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title format-text-popular">
                        Fitness
                      </h4>
                      <p className="card-text format-text-para">
                        Lorem Ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                  <div className="card border-0">
                    <img
                      className="card-img-top format-card-image"
                      src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
                      alt="home"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title format-text-popular">
                        Fitness
                      </h4>
                      <p className="card-text format-text-para">
                        Lorem Ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                  <div className="card border-0">
                    <img
                      className="card-img-top format-card-image"
                      src={process.env.PUBLIC_URL + "images/exercise2.jpg"}
                      alt="home"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title format-text-popular">
                        Fitness
                      </h4>
                      <p className="card-text format-text-para">
                        Lorem Ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- After health div --> */}

            <div className="format-div">
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
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />

                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />

                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="format-div">
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
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />
                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />
                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="format-div">
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
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />
                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                      <div className="card border-0">
                        <img
                          className="card-img-top health-section img-fluid"
                          src={process.env.PUBLIC_URL + "images/plate_food.jpg"}
                          alt="home"
                        />
                        <div className="card-body text-center">
                          <h6 className="format-text-health">
                            <span className="color-health"> Health</span> - Nov
                            20, 2020
                          </h6>
                          <h4 className="card-title format-text-health-1">
                            Mood Depends On Food
                          </h4>

                          <hr className="temp-line-format" />
                          <p className="card-text font-format">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. .
                          </p>
                        </div>
                      </div>
                    </div>
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
