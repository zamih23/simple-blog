import axios from "axios";

export const createNewPost = async (title: string, body: string) => {
  try {
    const response = await axios.post(
      "https://simple-blog-api.crew.red/posts",
      {
        title: title,
        body: body,
      }
    );
    return response;
  } catch (err) {
    console.log("CREATE NEW POST ERROR", err);
  }
};
