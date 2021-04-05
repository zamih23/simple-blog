import { createMemoryHistory } from "history";
import {  Router, Route, Switch } from "react-router-dom";
import "../styles/globals.css";

import ViewPost from "./view-post-page";
import { CreatePost } from "./create-post";
import styled from "styled-components";
import HomePage from "./index"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
