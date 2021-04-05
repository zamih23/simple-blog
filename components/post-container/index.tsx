import { FC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useRouter } from 'next/router'

interface PostContainerProps {
  title: string;
  body: string;
  id: number;
}

export const PostContainer: FC<PostContainerProps> = ({ title, body, id }) => {
    const history = useHistory();
    const router = useRouter();

  const Container = styled.div`
    height: 300px;
    background: #c0c0c0;
    flex: 0.2;
    margin: 15px;
    border-radius: 5px;
    border: none;
  `;

  const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: black;
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

  const TitleText = styled.span``;
  console.log(router)
  return (
    <Container
    as="button"
    onClick={()=>router.push("/view-post-page")}
    >
      <Text size="23px">{title}</Text>
      <Separator />
      <Text size="18px">{body}</Text>     
    </Container>
  );
};
