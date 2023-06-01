import { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth';
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current User:', user);
            setLoading(false)
        })
        return () =>{
            return unsubscribe; //keeps a watch on the user change
        }
    },[user]);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photoURL)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        LogIn,
        GoogleSignIn,
        LogOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;