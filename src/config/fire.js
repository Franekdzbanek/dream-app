import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyDzYvUOKDy9L22HdP96FCz9J38K91tmVTQ",
    authDomain: "project1-56b42.firebaseapp.com",
    databaseURL: "https://project1-56b42.firebaseio.com",
    projectId: "project1-56b42",
    storageBucket: "",
    messagingSenderId: "1063233969910"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
