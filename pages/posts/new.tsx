import { useRouter } from "next/router";
import { FC, useState } from "react";
import { createNewPost } from "../../actions/create-post";
import {
  Container,
  TitleInput,
  BodyInput,
  Button,
} from "../../styles/new-post-styles";

interface CreatePostProps {}

const CreatePost: FC<CreatePostProps> = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [titleFocus, setTitleFocus] = useState<boolean>(false);
  const [bodyFocus, setBodyFocus] = useState<boolean>(false);

  const createPost = async () => {
    await createNewPost(title, body);
    router.back();
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

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClickSubmit = () => createPost();

  return (
    <Container>
      <h2>Create new post</h2>
      <TitleInput
        onClick={() => toggleFocus("title")}
        placeholder="Name your post"
        onChange={handleTitleChange}
        value={title}
        autoFocus={titleFocus}
      />
      <BodyInput
        onClick={() => toggleFocus("body")}
        placeholder="What happened?"
        onChange={handleBodyChange}
        autoFocus={bodyFocus}
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
