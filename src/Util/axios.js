// import axios from "axios";
const axios = require("axios");

let api = axios.create({
  baseURL: "http://localhost:3001/",
});

let showFeatured = async () => {
  let response = await api.get("/blogs/showFeatured");
  // console.log(response.data.data);
  return response.data.data;
};

let showSingleBlogPost = async (slug) => {
  let response = await api.get("/blogs/showSingleBlogPost/"+slug);

  // console.log(response.data);

  return response.data.data;
};

module.exports = {
  showFeatured: showFeatured,
  showSingleBlogPost: showSingleBlogPost,
};
