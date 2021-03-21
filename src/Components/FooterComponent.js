import React, { Component } from "react";

let date = new Date();

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <React.Fragment>
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
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>

                <div className="row-md-3 footer-social">
                  <i className="fab fa-instagram fa-lg"></i>
                  <i className="fab fa-facebook fa-lg"></i>
                  <i className="fab fa-twitter fa-lg"></i>
                  <i className="fab fa-youtube fa-lg"></i>
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
                    <label htmlFor="exampleInputEmail">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="footer-form-group">
                    <label htmlFor="exampleInputMessage">Message*</label>
                    <br />
                    <textarea
                      name="message"
                      cols="10"
                      rows="5"
                      defaultValue={this.state.value}
                    />
                  </div>
                  <div className="footer-form-group">
                    <button type="submit" className="btn submit-btn">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <hr />
            <p>Copywright @ Health and fitness {date.getFullYear()}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FooterComponent;
