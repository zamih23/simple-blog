import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container, Text, Button } from "../../styles/single-post-styles";

interface ViewPostProps {}

const ViewPost: FC<ViewPostProps> = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const data = useSelector((state) => state.posts);
  const { postId } = router.query;

  useEffect(() => {
    setPost(data.find((post) => post.id.toString() === postId));
  }, []);

  console.log(data, "data");
  console.log(post);
  return (
    <Container>
      <h2>{post.title}</h2>
      <Text>{post.body}</Text>
      <Button onClick={() => router.back()}>Go Back</Button>
    </Container>
  );
};

export default ViewPost;
