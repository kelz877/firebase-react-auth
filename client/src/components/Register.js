import React, {useState, useContext } from 'react';
import {AuthContext} from '../index'
import * as firebase from 'firebase'
import {withRouter} from 'react-router-dom'

const Register = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                    firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(res => {
                        history.push('/dashboard')
                        if(res.user) Auth.setLoggedIn(true);
                    })     
                    .catch(e => {
                        setErrors(e.message)
                    })    ;                               
                })
            


    };
    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    console.log(result)
                    history.push('/dashboard')
                    Auth.setLoggedIn(true)
                })
                .catch(e => setErrors(e.message))
            })
    }



    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={e => handleForm(e)}>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email Address" 
                />
                <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="password"
                />
                <button type="submit">Register</button>                
                <hr />
                <button
                    className="googleBtn" 
                    type="button"
                    onClick={() => handleGoogleLogin()}
                    >

                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                    />
                    Join With Google
                </button>
                <span>{error}</span>
            </form>
        </div>
    )
}
export default withRouter(Register);