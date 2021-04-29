import React, { useState } from "react";
import contactArray from "../shared/contactus";

let date = new Date();





const FooterComponent = () => {
  let [inputVal, setInputValue] = useState({
    xemail: "",
    message: "",
  });


  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    console.log(`Name: ${name} and value: ${value}`);
    setInputValue({ ...inputVal, [name]: value });
  }

  const handleSubmit = (event) => {
    alert(`Email: ${inputVal.xemail} & Message: ${inputVal.message}`);
    event.preventDefault();
  };

  
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
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
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
                  <i className="fa fa-map-marker-alt fa-lg mr-3"></i> Faridabad,
                  Haryana
                </div>
                <div className="footer-icon-gap">
                  <i className="fa fa-phone-alt fa-lg mr-3"></i> +91 -
                  9812345678
                </div>
                <div className="footer-icon-gap">
                  <i className="fa fa-envelope fa-lg mr-3"></i> abc@example.com
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 my-1">
              <h4 className="footer-title">
                Contact Us
                <hr />
              </h4>

              <form className="form-center" onSubmit={handleSubmit}>
                <div className="footer-form-group">
                  <label htmlFor="exampleInputEmail1">Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    ref="xemail"
                    placeholder="xemail"
                    defaultValue={inputVal.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="exampleInputMessage">Message*</label>
                  <br />
                  <textarea
                    id="exampleInputMessage"
                    cols="10"
                    rows="5"
                    ref="message"
                    placeholder="message"
                    defaultValue={inputVal.message}
                    onChange={handleChange}
                    required
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
  )
};

export default FooterComponent;
