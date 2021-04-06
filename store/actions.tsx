export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = (data) => {
  return {
    type: FETCH_POSTS,
    payload: data
  };
};
