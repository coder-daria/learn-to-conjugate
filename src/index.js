import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { Provider } from 'react-redux';

import configureStore from './redux/store/createStore';

import App from './App';

const ROOT = document.getElementById("root");
const STORE = configureStore();

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
};

ReactDOM.render(
  <Provider store={STORE}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  ROOT,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
