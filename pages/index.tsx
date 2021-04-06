import { FC, useEffect, useState } from "react";
import { getPosts } from "../actions/get-posts";
import { PostContainer } from "../components/post-container";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";

interface HomePageProps {}
const HomePage: FC<HomePageProps> = () => {
  const data = useSelector((state) => state.posts);
  const getData = useDispatch();
  const router = useRouter();

  const fetchPost = async () => {
    const response = await getPosts();
    getData(fetchPosts(response))
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 45px;
    padding-right: 45px;
  `;

  const Button = styled.button`
    position: absolute;
    top: 25px;
    right: 25px;
    width: 90px;
    height: 50px;
    font-size: 18px;
  `;
  

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
