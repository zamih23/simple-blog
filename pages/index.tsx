import { FC, useEffect } from "react";
import { getPosts } from "../actions/get-posts";
import { PostContainer } from "../components/post-container";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";
import { Container, Button } from "../styles/homepage-styles";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const data = useSelector((state) => state.posts);
  const getData = useDispatch();
  const router = useRouter();

  const fetchPost = async () => {
    const response = await getPosts();
    getData(fetchPosts(response));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container>
      <h1>Latest Posts</h1>
      {data.map((post) => {
        if (!(post.body === "" && post.title === "")) {
          return (
            <PostContainer title={post.title} body={post.body} id={post.id} />
          );
        }
      })}
      <Button onClick={() => router.push("/posts/new")}>Create new post</Button>
    </Container>
  );
};

export default HomePage;
