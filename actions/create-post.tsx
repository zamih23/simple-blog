import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("https://simple-blog-api.crew.red/posts");
    return response.data;
  } catch (err) {
    console.log("GET POST ERROR", err);
  }
};