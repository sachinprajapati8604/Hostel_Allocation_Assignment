import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import fire from '../config/Fire'
import './css/Login.css'

class Login extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,

        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>
                        {/* <div>Signed In!</div> */}
                        <button className="btn" onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <h1 name={firebase.auth().currentUser.displayName}>Welcome {firebase.auth().currentUser.displayName}</h1>
                    </span>
                ) : (
                    <>
                    <p>Please sign-in :</p>
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    </>
                )}
            </div>
        )
    }
}

export default Login;


