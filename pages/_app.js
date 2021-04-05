import { createMemoryHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import "../styles/globals.css";
import { HomePage } from "./home-page";
import { ViewPost } from "./view-post-page";
import { CreatePost } from "./create-post";
import styled from "styled-components";

const history = createMemoryHistory();

function MyApp() {
  const Container = styled.div`
    padding-right: 75px;
    padding-left: 75px;
  `;
  return (
    <Router history={history}>
      <Container>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/posts/:postId">
            <ViewPost />
          </Route>
          <Route exact path="/posts/new">
            <CreatePost />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default MyApp;
