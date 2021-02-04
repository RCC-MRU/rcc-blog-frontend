import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container text-center my-4 ">
            <p className="format-heading">
              Health <span class="red-col"> & </span> Fitness
            </p>
            <p className="small-heading">How To Live a Healthy and Fit Life?</p>
          </div>

          {/* header ends */}

          <section className="spacing-section">
            {/* first three pics  */}
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 my-1 px-1">
                  <div className="banner-img-left">
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
                      <div className="banner-img-right">
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
                      <div className="banner-img-right">
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
                      src="./public/images/plate_food.jpg"
                      alt="Card image"
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
                      src="./public/images/plate_food.jpg"
                      alt="Card image"
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
                      src="./public/images/plate_food.jpg"
                      alt="Card image"
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
                      src="./public/images/plate_food.jpg"
                      alt="Card image"
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
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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
                          class="card-img-top health-section img-fluid"
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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
                          src="./public/images/plate_food.jpg"
                          alt="Card image"
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

          {/* <!---------------------footer starts---------------> */}

          <section id="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-4 my-1">
                  <div className="row-md-9">
                    <h4 className="footer-title">
                      About Us
                      <hr />
                    </h4>

                    <div className="footer-about-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </div>
                  </div>

                  <div className="row-md-3 footer-social">
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-youtube fa-2x"></i>
                  </div>
                </div>

                <div className="col-12 col-md-4 my-1">
                  <h4 className="footer-title">
                    Address
                    <hr />
                  </h4>

                  <div className="footer-connect-text">
                    <div className="footer-icon-gap">
                      <i className="fa fa-map-marker-alt fa-lg mr-3"></i>{" "}
                      Faridabad, Haryana
                    </div>
                    <div className="footer-icon-gap">
                      <i className="fa fa-phone-alt fa-lg mr-3"></i> +91 -
                      9812345678
                    </div>
                    <div className="footer-icon-gap">
                      <i className="fa fa-envelope fa-lg mr-3"></i>{" "}
                      abc@example.com
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 my-1">
                  <h4 className="footer-title">
                    Contact Us
                    <hr />
                  </h4>
                  <form className="form-center">
                    <div className="footer-form-group">
                      <label for="exampleInputEmail">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="footer-form-group">
                      <label for="exampleInputMessage">Message*</label>
                      <br />
                      <textarea name="message" cols="10" rows="5">
                        {" "}
                      </textarea>
                    </div>
                    <div className="footer-form-group">
                      <button type="submit" class="btn submit-btn">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="copyrights">
              <hr />
              <p>Copywright @ Health and fitness 2020</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
