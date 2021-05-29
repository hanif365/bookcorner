import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import google from '../../Images/google-logo.png';
import Navbar from "../Shared/Navbar/Navbar";
import firebaseConfig from './firebase.config';
import './LogIn.css';


const LogIn = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={handleGoogleSignIn} className="google-signIn-btn"><img className="google-logo" src={google} alt="google-logo" /><span>Sign In With Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;