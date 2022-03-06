import {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";

import UserContext from './UserContext';
// import app from 'src/firebase/getFirebaseApp';
 

function UserState(props) {
    const firebaseConfig = {
        apiKey: "AIzaSyCPOD6uz1WqFQBdxxNj9etwxIa_Lmrsm7o",
        authDomain: "pluto-devcraft.firebaseapp.com",
        projectId: "pluto-devcraft",
        storageBucket: "pluto-devcraft.appspot.com",
        messagingSenderId: "331101092899",
        appId: "1:331101092899:web:6347a2f3a478a0f0590596"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [user, userLoading, userError] = useAuthState(auth);
    // const [userData , setUserData] = useState('');

    // useEffect(async ()=>{
    //     if(user){
    // const userData = await getUserById(user.uid);
    // setUserData(userData);
    //     }
    // },[user]);

    const logout = ()=>{
        signOut(auth);
    }
    return(
        <UserContext.Provider value={{user, userLoading, userError, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;