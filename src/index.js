import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Visualization from './algo-visualization';

ReactDOM.render(
  <React.StrictMode>
    <Visualization 
      row={40}
      col={20}
      isStart={[4,9]}
      isTarget={[35,9]}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
