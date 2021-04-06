import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
interface ViewPostProps {}

const ViewPost: FC<ViewPostProps> = () => {
  const router = useRouter();
  const data = useSelector((state) => state.posts);
  const { postId } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(data.find((post) => post.id.toString() === postId));
  }, []);

  const Container = styled.div`
    display: flex;
    fles-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `;
  const Text = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: center;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    font-size: ${(props) => props.size};
  `;
  const Button = styled.button`
    width: 100px;
    height: 35px;
    margin: 10px;
  `;
  console.log(data, "data");
  console.log(post);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{post.title}</h2>
        <Text>{post.body}</Text>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    </Container>
  );
};

export default ViewPost;
