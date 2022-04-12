import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
const LogOut = () => {
    const navigate = useNavigate();
    const out = async()=>{
        try{
        await signOut(auth);
        navigate("/");
        }
        catch{
            console.log("error");
        }
    }
  return (
      <button onClick={out}>Logout</button>
  )
}

export default LogOut