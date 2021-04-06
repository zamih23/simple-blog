import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import { Container, Text, Separator } from "../components-style";

interface PostContainerProps {
  title: string;
  body: string;
  id: number;
}

export const PostContainer: FC<PostContainerProps> = ({ title, body, id }) => {
  const history = useHistory();
  const router = useRouter();

  return (
    <Container
      as="button"
      onClick={() =>
        router.push({ pathname: "/posts/[postId]", query: { postId: id } })
      }
    >
      <Text size="23px">{title}</Text>
      <Separator />
      <Text size="18px">{body}</Text>
    </Container>
  );
};
