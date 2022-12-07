import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Prop from './components/Prop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Prop fname="Mohammad" lname="Ismail" age={20} hairColor="Black"/>
    <Prop fname="user2" lname="lname2" age={22} hairColor="Brown"/>
    <Prop fname="user3" lname="lname3" age={22} hairColor="Brown"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
