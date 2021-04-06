import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled from "styled-components";
import { createNewPost } from "../../actions/create-post";

interface CreatePostProps {}

const CreatePost: FC<CreatePostProps> = () => {
    const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [titleFocus, setTitleFocus] = useState<boolean>(false);
  const [bodyFocus, setBodyFocus] = useState<boolean>(false);

  const createPost = async () => {
    await createNewPost(title, body);
  };

  const toggleFocus = (type: string) => {
    if (type === "title") {
      setTitleFocus(true);
      setBodyFocus(false);
    } else {
      setTitleFocus(false);
      setBodyFocus(true);
    }
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const TitleInput = styled.input`
    height: 30px;
    width: 600px;
    font-size: 15px;
    margin: 10px;
  `;
  const BodyInput = styled.textarea`
    resize: none;
    width: 600px;
    height: 400px;
    font-size: 15px;
    margin-bottom: 10px;
  `;
  const Button = styled.button`
    width: 100px;
    height: 35px;
    margin: 10px;
  `;
  console.log({ title });
  console.log({ body });

  const handleClickSubmit = () => createPost();
  return (
    <Container>
      <h2>Create new post</h2>
      <TitleInput
        onClick={() => toggleFocus("title")}
        placeholder="Name your post"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        autoFocus={titleFocus}
      />
      <BodyInput
        onClick={() => toggleFocus("body")}
        placeholder="What happened?"
        cols="140"
        rows="75"
        onChange={(event) => setBody(event.target.value)}
        value={body}
      />
      <div>
        <Button onClick={() => router.back()}>Go Back</Button>
        <Button onClick={handleClickSubmit}>Submit</Button>
      </div>
    </Container>
  );
};

export default CreatePost;
