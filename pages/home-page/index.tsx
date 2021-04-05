import { FC, useEffect, useState } from "react";
import { getPosts } from "../../actions/get-posts";
import { PostContainer } from "../../components/post-container";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface HomePageProps {}
export const HomePage: FC<HomePageProps> = () => {
  const [posts, setAllPosts] = useState<Array<object>>([]);
  const history = useHistory();
  const fetchPosts = async () => {
    const response = await getPosts();
    setAllPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(history)

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  
  return (
    <Container>
      <h1>Latest Posts</h1>
        {posts.map((post) => {
          return (
            <PostContainer title={post.title} body={post.body} id={post.id} />
          );
        })}
    </Container>
  );
};