//React and React native import
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

//Components  and Elements local
import Route from "./src/components/Route";
import reducers from "./src/reducers/Index";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAsCE3yt3IkWG_WGI_QwFSiBtL_RfmpTT0",
      authDomain: "playchat-3046f.firebaseapp.com",
      databaseURL: "https://playchat-3046f.firebaseio.com",
      projectId: "playchat-3046f",
      storageBucket: "playchat-3046f.appspot.com",
      messagingSenderId: "392175497279"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
