import { FC } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router'
interface ViewPostProps {}

 const ViewPost: FC<ViewPostProps> = () => {
   const router = useRouter();
   const {postId} = router.query;
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
    margin: 10px
  `;
  console.log(postId)
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>title</h2>
        <Text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <Button onClick={() => router.back() }>Go Back</Button>
      </div>
    </Container>
  );
};

export default ViewPost;