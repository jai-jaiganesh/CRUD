import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from './firebase';
const Signup = () => {
   
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");
    const navigate=useNavigate();
 const register =async(event)=>{
     event.preventDefault()
     if(!registerEmail||!registerPassword){
        return toast.warning("Please fill the fields");
    }
     try{
  const user=await createUserWithEmailAndPassword(auth,
    registerEmail,
    registerPassword);
    navigate("/home")
  console.log(user);
 
     }
     catch{
         console.log("error");
         console.log("Fail to create an account")
     }
 };
    
  return (
    <div className="row">
    <h1 className='display-2 text-center'>
        SignUp Form
    </h1>
<div className="col-md-5 shadow mx-auto p-5">
<form onSubmit={register}>
{/* <form > */}
<div className='form-group'>
    <input type="email"  placeholder='Email' className='form-control' 
    value={registerEmail} 
    onChange={(event)=>{setRegisterEmail(event.target.value)}}
      />
</div>


<div className='form-group'>
    <input type="Password"   placeholder='Password' className='form-control'
     value={registerPassword}  
     onChange={(event)=>{setRegisterPassword(event.target.value)}}
           />
            
</div>

<div className='form-group'>
    <button onClick={register} type="Submit" value='SignUp' className='btn btn-primary m-1'>SignUp</button>
</div>
<h1 className=' text-center'>
        Have a account already?
        {/* <Link></Link> */}
        <Link to ="/signin" className='btn btn-primary ml-3 '>
                Login
            </Link>
    </h1>
</form>
    </div>
    </div>
  )
}

export default  Signup;