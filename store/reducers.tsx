import { getPosts } from "../actions/get-posts";
import { FETCH_POSTS } from "./actions";

interface stateProps {
  postsData: Array<object>
}

const initialState: stateProps = {
  postsData: []
}

const fetchPosts = async () => {
  const data = await getPosts()
  console.log(data)
  return [data]
}

export const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    default:
      return state;
  }
}