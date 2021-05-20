import React, { useEffect, useState } from "react";
import CategoryType from "./SubComponents/CategoryType";
import OtherCategories from "./RightSide/OtherCategories";
import axios from "axios"
// import RightSideMenuBot from "./RightSide/RightSideMenuBot";
// import ReadingProgress from "./SubComponents/ReadingBar";

// class CategoryComponent extends Component {
  
//   constructor(props) {
//     super(props);

//     this.state = {
//       homeCategoryName: null,
//       rightSide: [
//         {
//           moreCategoryImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           latestPostDate: "20 Nov, 2020",
//           latestPostImage: process.env.PUBLIC_URL + "images/exercise1.jpg",
//           moreCategoryName: "fitness",
//           latestPostName: "Add this to your Daily work routine.",
//         },
//       ],

//       categoryData: [
//         {
//           blogId: 0,
//           createdAt: "Nov 20, 2020",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's
//           standard dummy text ever since the`,
//           categoryAuthor: "Kunal",
//           blogTitle: "Add This to your workout routine",
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//         },
//         {
//           blogId: 1,
//           createdAt: "Nov 30, 2020",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's
//           standard dummy text ever since the`,
//           categoryAuthor: "Kunal",
//           blogTitle: "Add This to your workout routine",
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//         },
//         {
//           blogId: 2,
//           createdAt: "Dec 10, 2020",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's
//           standard dummy text ever since the`,
//           categoryAuthor: "Kunal",
//           blogTitle: "Add This to your workout routine",
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//         },
//         {
//           blogId: 3,
//           createdAt: "Dec 20, 2020",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's
//           standard dummy text ever since the`,
//           categoryAuthor: "Kunal",
//           blogTitle: "Add This to your workout routine",
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//         },
//         {
//           blogId: 4,
//           createdAt: "Dec 30, 2020",
//           blogContent: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's
//           standard dummy text ever since the`,
//           categoryAuthor: "Kunal",
//           blogTitle: "Add This to your workout routine",
//           blogImg: process.env.PUBLIC_URL + "images/exercise1.jpg",
//         },
//       ],
//     };
//   }
//   // target = React.createRef();
  
//   render()
//   {
//     return (
      
//       <React.Fragment>
//         <div className="rectangle-nav">
//           <p className="category-rectangle">Category</p>
//           <p className="fitness-rectangle">Fitness</p>
//         </div>

//         <section id="blogPost">

//           <div className="container">
//           {/* <ReadingProgress /> */}
//             <div className="row">
//               <div className="col-md-9">
//                 {this.state.categoryData.map((categoryData) => {
//                   return (
//                     <CategoryType
//                     key={categoryData.blogId}
//                     blogTitle={categoryData.blogTitle}
//                       categoryAuthor={categoryData.categoryAuthor}
//                       createdAt={categoryData.createdAt}
//                       blogImg={categoryData.blogImg}
//                       blogContent={categoryData.blogContent}
//                     />
//                   );
//                 })}
//               </div>

//               <div className="col-md-3">
//                 {/* <RightSideMenuBot
//                   moreCategoryImage={this.state.rightSide[0].moreCategoryImage}
//                   latestPostDate={this.state.rightSide[0].latestPostDate}
//                   latestPostImage={this.state.rightSide[0].latestPostImage}
//                   latestPostName={this.state.rightSide[0].latestPostName}
//                   moreCategoryName={this.state.rightSide[0].moreCategoryName}
//                 /> */}
//               </div>
//             </div>
//           </div>
//         </section>
//       </React.Fragment>
//     );
//   }
// }

const CategoryComponent =() => {
  const [category, setCategory] = useState([]);
  const [otherCategory, setOtherCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`/blogs/showFeatured`)
      .then((res) => {
        const about = res.data;
        // console.log(about);
        setCategory(about);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  })
  useEffect(() => {
    axios
    .get("/blogs/showCategoryMaster")
    .then((res)=>{
      const result = res.data;
      setOtherCategory(result);
    })
    .catch((err) => {console.log(err);}
    ,[])
  })
  return(
    <React.Fragment>
        <div className="rectangle-nav">
          <p className="category-rectangle">Category</p>
          <p className="fitness-rectangle">Fitness</p>
        </div>

        <section id="blogPost">

          <div className="container">
          {/* <ReadingProgress /> */}
            <div className="row">
            <div className="col-md-9">
            {category.map((categoryData) => {
                  return (
                    <a href={'/blog/'+categoryData.slug}>

                    <CategoryType
                    key={categoryData.blogId}
                    blogTitle={categoryData.blogTitle}
                      categoryAuthor={categoryData.categoryAuthor}
                      createdAt={categoryData.createdAt}
                      blogImg={categoryData.blogImg}
                      blogContent={categoryData.blogContent}
                    />
                    </a>
                  );
                })}
            </div>
            <div className="col-md-3">
            <div className="row-md-3 categories">
        <hr />
        <h4 className="connectAndFollow-title border">Connect And Follow</h4>
        <div className="social-blogpost">
          <div>
            <i className="fab fa-facebook-f socials"></i>
          </div>
          <div>
            <i className="fab fa-instagram socials"></i>
          </div>
          <div>
            <i className="fab fa-google-plus socials"></i>
          </div>
          <div>
            <i className="fab fa-twitter socials"></i>
          </div>
          <div>
            <i className="fa fa-rss-square"></i>
          </div>
        </div>
      </div>
            <div className="categories row-md-3">
                  <hr />
                  <h4 className="categories-title border">Categories</h4>
                      <OtherCategories category={otherCategory}    />
                      
                  
                </div>
                
            </div>
            </div>
          </div>
        </section>
      </React.Fragment>
  )
}

export default CategoryComponent;
