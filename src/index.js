import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";  // Redux.createStore
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"


// Created Redux store using a reducer. Add Redux devtools.
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
    {/* Provider is the "view binder". Connects React App to Redux store*/}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
