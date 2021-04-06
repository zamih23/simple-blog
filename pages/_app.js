import { createMemoryHistory } from "history";
import {  Router, Route, Switch } from "react-router-dom";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
