import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext= createContext(null) ;

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(' ');
    const [loading, setLoading]= useState(true);


    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();



    /// Create user with email and password
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user with email and password
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Sign in with google
    const loginwithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with github
    const logInWithGithub= () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);

    }

    // log out
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const userinfo= {
        user,
        loading,
        loginwithGoogle,
        logInWithGithub,
        logOut,
        createUser,
        signInUser,


    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('On auth user', currentUser);
            setUser(currentUser);
            setLoading(false);

            // for getting token
            if(currentUser){
                const loggedEmail= {email: currentUser.email};
                axios.post('http://localhost:5000/jwt', loggedEmail, {withCredentials:true})
                .then(res=>{
                    console.log("token response",res.data);
                })

            }

        })

        return ()=>{
            return unsubscribe([]);
        }

    },[])

    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;