import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { UserContext } from "../../App";
import google from '../../Images/google-logo.png';
import firebaseConfig from './firebase.config.js';
import './LogIn.css';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      });

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                // console.log(res);
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                  isSignedIn: true,
                  name: displayName,
                  email: email,
                  photo: photoURL
                }
                setLoggedInUser(signedInUser)
                console.log(displayName, photoURL, email);
              })
              .catch(error => {
                console.log(error)
                console.log(error.message)
              })
    }

    const handleGoogleSignOut = () => {
        
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
                            {
                                loggedInUser.email ? <button onClick={handleGoogleSignOut} className="google-signIn-btn"><img className="google-logo" src={google} alt="google-logo" /><span>Sign Out</span></button> :
                                <button onClick={handleGoogleSignIn} className="google-signIn-btn"><img className="google-logo" src={google} alt="google-logo" /><span>Sign In</span></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LogIn;