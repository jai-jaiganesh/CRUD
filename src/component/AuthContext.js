import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'


const AuthContext =React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider  ({children})  {
    const[currentUser,setCurrentUser]=useState()
    const[loading,setLoading]=useState(true)
    function signup(email,Password){
        return auth.createUserWithEmailAndPassword(email,Password)
    }
    useEffect(() =>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    const value={
        currentUser,
        signup
        
    }
  return (
    <AuthContext.Provider value={value}>
{!loading&&children}

    </AuthContext.Provider>
  )
}

 