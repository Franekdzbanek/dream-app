import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }

state = { isSignedIn: false}
uiConfig = {
  signInFlow: 'popup',
  signInOptions:[
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccesss: () => false
  }
}

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({ user});
      } else {
        this.setState({user: null});
      }
    })
  }

  signOut() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? (
          <div>
            <div>{this.state.user.displayName} jesteś zalogowany</div>
            <button onClick={this.signOut}>Sign out</button>
          </div>
        ) : (
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
