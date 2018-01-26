import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyALRix7FPp1-nRkSq3WZ4CW08Cl1jw5dTg",
  authDomain: "mindsharp-story.firebaseapp.com",
  databaseURL: "https://mindsharp-story.firebaseio.com",
  projectId: "mindsharp-story",
  storageBucket: "mindsharp-story.appspot.com",
  messagingSenderId: "810789256676"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
