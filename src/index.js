import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.scss';
import App from './view/App';
import { BrowserRouter} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import store from './redux/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
