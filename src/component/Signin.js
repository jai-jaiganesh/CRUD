import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { auth } from './firebase';
const Signin = () => {
    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
  
    const navigate=useNavigate();
 const login=async(e) =>{
     e.preventDefault()
     if(!loginEmail||!loginPassword){
        return toast.warning("Please fill the fields");
    }
    try{
 const user=await signInWithEmailAndPassword(auth,
   loginEmail,
   loginPassword
   );
   navigate("/home")
    }
    catch{
        console.log("error");
        alert("Invalid email or password")
    }
 }
 return (
    <div className="row">
    <h1 className='display-2 text-center'>
        Login Form
    </h1>

<div className="col-md-5 shadow mx-auto p-5">
<form onSubmit={login}>
<div className='form-group'>
    <input type="email" placeholder='Email' className='form-control'
    value={loginEmail} 
    onChange ={e => setLoginEmail(e.target.value) } /> 
</div>


<div className='form-group'>
    <input type="Password" placeholder='Password' className='form-control'
    value={loginPassword}
            onChange ={e => setLoginPassword(e.target.value)}/>
            
</div>

<div className='form-group m-1'>
    <input type="Submit" value='Login' className='btn btn-primary'/>
</div>
<h1 className=' text-center'>
        create a account ?
        {/* <Link></Link> */}
        <Link to ="/" className='btn btn-primary m-1 '>
                Signup
            </Link>
    </h1>
</form>
    </div>
    </div>
  )
}

export default Signin;