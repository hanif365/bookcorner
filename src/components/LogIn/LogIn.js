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
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="form-input">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label"><b>User Name</b></label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="User Name" />
                        </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><b>Email address</b></label>/
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><b>Password</b></label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>
                            <button type="submit" className="form-btn btn-style">SUBMIT</button>
                        </div>
                        <div className="col-md-12">
                            <button onClick={handleGoogleSignIn} className="google-signIn-btn"><img className="google-logo" src={google} alt="google-logo" /><span>Sign In With Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LogIn;