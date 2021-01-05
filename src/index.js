import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';

const store = createStore( searchRobots );

ReactDOM.render(
  <React.StrictMode>
    {/* pass the stoe to the provider 
    which will dispach it to the App compaonent 
    included all children of the App compnent */}
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
