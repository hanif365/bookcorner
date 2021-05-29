import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import google from '../../Images/google-logo.png';
import firebaseConfig from './firebase.config.js';
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
                console.log(result.user);
            }).catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    return (
        <div>
            <div className="container">
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