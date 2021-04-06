import { createMemoryHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "../styles/globals.css";
import { rootReducer } from "../store/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp;
