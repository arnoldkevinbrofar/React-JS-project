import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// import Landingpage from './ReactSandbox/Landingpage.js';
// import GreenButton from './ReactSandbox/Activities/PracticeButtons/GreenButton.js';
import Posts from './ReactSandbox/Activities/PracticeMessageBoard/Posts.js';
// import CounterApp from './ReactSandbox/CounterApp/CounterApp.js';
// ReactDOM.render(<Landingpage />, document.getElementById('root'));
ReactDOM.render(<Posts />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
