import React, { Component } from "react";

class CategoryComponent extends Component {
  render() {
    return (
      <React.Fragment>
       <div class="rectangle-nav">
      <p class="category-rectangle">Category</p>
      <p class="fitness-rectangle">Fitness</p>
    </div>
    <br /><br /><br /><br /><br />
        <section id="blogPost">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="category-with-date">
              Fitness
              <div className="category-grey">- Nov 20 , 2020</div>
            </div>
            <h3>Add This to your workout routine</h3>
              <img
              src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}
              width="770px"
              height="513px"
              className="img-fluid"
              alt="categories"
            />  

            <div className="blog-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </div>

            <div className="readmore-button"><span> Read More </span></div>

            <hr />
            <div className="blog-like row">
              <div className="col-md-6">
                <p>Kunal Arora</p>
              </div>
              <div className="col-md-3"><i className="far fa-heart"></i></div>
              <div className="col-md-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="far fa-envelope"></i>
              </div>
            </div>
            <hr style={{marginTop : "-20px"}} />
            <hr style={{marginTop: "-14px"}} />

            <div className="category-with-date">
              Fitness
              <div className="category-grey">- Nov 20 , 2020</div>
            </div>
            <h3>Add This to your workout routine</h3>
            <img
              src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}
              width="770px"
              height="513px"
              className="img-fluid"
              alt="work-out"
            /> 

            <div className="blog-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </div>

            <div className="readmore-button"><span> Read More </span></div>

            <hr />
            <div className="blog-like row">
              <div className="col-md-6">
                <p>Kunal Arora</p>
              </div>
              <div className="col-md-3"><i className="far fa-heart"></i></div>
              <div className="col-md-3">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <hr style= {{marginTop: "-20px"}} />
            <hr style={{marginTop: "-14px"}} />

            <div className="category-with-date">
              Fitness
              <div className="category-grey">- Nov 20 , 2020</div>
            </div>
            <h3>Add This to your workout routine</h3>
            <img
              src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}
              width="770px"
              height="513px"
              className="img-fluid"
              alt="workOut"
            />

            <div className="blog-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </div>

            <div className="readmore-button"><span> Read More </span></div>

            <hr />
            <div className="blog-like row">
              <div className="col-md-6">
                <p>Kunal Arora</p>
              </div>
              <div className="col-md-3"><i className="fa fa-heart"></i></div>
              <div className="col-md-3">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <hr style={{marginTop: "-20px"}} />
            <hr style={{marginTop: "-14px"}}/>

          
          </div>

          <div className="col-md-3">
            <div className="row-md-3">
              <hr />
              <h4 className="border">About</h4>
              <img
                src={process.env.PUBLIC_URL + "images/pexels-pixabay-35009 (1).jpg"} 
                width="auto"
                height="227px"
                className="img-fluid"
                alt="fitness"
              />
              <p style={{fontFamily: "'Red Hat Text', sans-serif"}}>
                I am x y z <br />
                bkvabhabuhvawebubdbhva
              </p>
              <h5
                style={{fontFamily: "Red Hat Text, sans-serif", size: "23px", color: "rgba(0, 0, 0, 0.7)"}}
              >
                Read More
              </h5>
            </div>

            <div className="row-md-3">
              <hr />
              <h4 className="connectAndFollow-title border">Connect And Follow</h4>
              <div className="social-blogpost">
                <div><i className="fa fa-facebook-f"></i></div>
                <div><i className="fa fa-instagram"></i></div>
                <div><i className="fa fa-google-plus"></i></div>
                <div><i className="fa fa-twitter"></i></div>
                <div><i className="fa fa-rss-square"></i></div>
              </div>
            </div>

            <div className="categories row-md-3">
              <hr />
              <h4 className="categories-title border">Categories</h4>
              <div className="row-md-4">
                <img
                  src= {process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}
                  className="img-fluid"
                  alt="cat"
                />
                <div className="textblock"><span>fitness</span></div>
              </div>
              <div className="row-md-4">
                <img
                  src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}
                  className="img-fluid" alt="pic"
                />
                <div className="textblock"><span>workout</span></div>
              </div>
              <div className="row-md-4">
                <img
                  src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"} 
                  className="img-fluid" alt="work-out"
                />
                <div className="textblock"><span>health</span></div>
              </div>
            </div>

            <div className="latestPosts row-md-3">
              <hr />
              <h4 className="latestPosts-title border">Latest Posts</h4>
              <div className="row-md-4">
                <div className="col-md-6">
                  <img
                    src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"}          
                     className="img-fluid"
                     alt="latest-post"
                  />
                </div>
                <div className="col-md-6">
                  <h6>Add this to your workout routine</h6>
                  <p>NOV 26 , 2020</p>
                </div>
              </div>

              <div className="row-md-4">
                <div className="col-md-6">
                  <img
                    src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"} 
                    className="img-fluid"
                    alt="workout-routine"
                  />
                </div>
                <div className="col-md-6">
                  <h6>Add this to your workout routine</h6>
                  <p>NOV 26 , 2020</p>
                </div>
              </div>

              <div className="row-md-4">
                <div className="col-md-6">
                  <img
                    src={process.env.PUBLIC_URL + "images/pexels-li-sun-2294361 (1).jpg"} 
                    className="img-fluid"
                    alt="wk-route"
                  />
                </div>
                <div className="col-md-6">
                  <h6>Add this to your workout routine</h6>
                  <p>NOV 26 , 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section> 
      </React.Fragment>
    );
  }
}

export default CategoryComponent;
