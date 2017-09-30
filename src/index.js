import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBP8kio9xQFv4By__dHh6hWUdU4-xQr9VU",
    authDomain: "fir-poc-941b5.firebaseapp.com",
    databaseURL: "https://fir-poc-941b5.firebaseio.com",
    projectId: "fir-poc-941b5",
    storageBucket: "",
    messagingSenderId: "137830762809"
  };

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
