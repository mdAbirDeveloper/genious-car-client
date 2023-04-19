import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token')
        return signOut(auth);
    };


    useEffect(()=>{
        const unsubscrive = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            setLoading(false);
        })
    },[])

    const authInfo = {
        user,
        loading,
        creatUser,
        loginUser,
        logOut,
        googleSignIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;