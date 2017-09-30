import React, {Component} from 'react'

import * as firebase from 'firebase'

class GoogleSignIn extends Component {

  googleSignIn = () => {
    console.log('google sign in clicked!', this.props)
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    googleAuthProvider.addScope('https://www.googleapis.com/auth/userinfo.email')
    googleAuthProvider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
      this.props.loginCallback({
        name: result.additionalUserInfo.profile.name
        , picture: result.additionalUserInfo.profile.picture
        , idToken: result.credential.idToken
        , accessToken: result.credential.accessToken
      })
    }).catch(error => {
      console.log(error)
    });
    // *******
    // ******* According to firebase docs, the redirect is prefered, but the redirect is losing the
    // ******* tokens with the redirect...perhpas redux can help solve this by placing the tokens in there or in local storage
    // ******* I tried placing the token in the local session storage, but that is getting lost as well.
    // ******* using break points, I can see the result with the full user details
    // *******
    // firebase.auth().signInWithRedirect(googleAuthProvider);
    // firebase.auth().getRedirectResult().then(function(result) {
    //   window.sessionStorage.setItem('authenticated_google_user', JSON.stringify({credential: result.credential}))
    //   return result
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     // var token = result.credential.accessToken;
    //     // // ...
    //     // var user = result.user;
    //     // //
    //     // console.log({token, user})
    //     //
    //     // window.sessionStorage.setItem('authenticated_google_user', JSON.stringify({token, user}))
    //
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    //   console.log({errorCode, errorMessage, email, credential})
    //   window.sessionStorage.setItem('authenticated_google_user', JSON.stringify({errorCode, errorMessage, email, credential}))
    // });
  }

  render() {
    return (
      <div>
        <button onClick={this.googleSignIn}>Google Sign In</button>
      </div>
    )
  }
}

export default GoogleSignIn
