import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="container-fluid footer-main d-flex">
            <div className="col-lg-4">
              <div className="footer-title-heading">About Us</div>
              <div className="fh"></div>
              <p className="discrip-footer mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="footer-social-media">
                <div className=" social-media ">
                  {" "}
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="social-media">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className=" social-media">
                  {" "}
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </div>
                <div className=" social-media">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-title-heading">Address</div>
              <div className="fh"></div>

              <div className="footer-location mt-5 ml-4">
                <div>
                  {" "}
                  <i class="fa fa-map-marker " aria-hidden="true"></i>
                </div>
                <p style={{ marginLeft: "30px", color: "#ffffff" }}>
                  Faridabad,Haryana
                </p>
              </div>
              <div className="footer-location mt-4 ml-4">
                <div>
                  {" "}
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <p style={{ marginLeft: "30px", color: "#ffffff" }}>
                  +91-9876543210
                </p>
              </div>
              <div className="footer-location mt-4 ml-4">
                <div>
                  {" "}
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <p style={{ marginLeft: "30px", color: "#ffffff" }}>
                  @email.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-title-heading">Contact Us</div>
              <div className="fh"></div>
              <form>
                <label style={{ color: "#FFFFFF" }}>Email:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  style={{
                    backgroundColor: "#333333",
                  }}
                />
                <label>Message:</label>
                <input
                  type="text"
                  name="message"
                  style={{
                    width: "100%",
                    height: "150px",
                    backgroundColor: "#333333",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
        <div class="copyrights">
          <hr />
          <p>Copywright @ Health and fitness 2020</p>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterComponent;
