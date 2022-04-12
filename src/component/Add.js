import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';

const Add = () => {
    const [name,setName]=useState("");
    const [label,setLabel]=useState("");
    const [status,setStatus]=useState("");
    const [Notes,setNotes]=useState("");
  const[number,setNumber]=useState("");
    const members = useSelector((state)=>state);
 const dispatch= useDispatch();
 const navigate = useNavigate() // insvaluee the function

 const handleSubmit =(e) =>{
        e.preventDefault();
        // const checkName=members.find(member =>member.number ===number && number)
        if(!name||!label || !status || !Notes){
            return toast.warning("Please fill the fields");
        }
        const data={
            value:members[members.length-1].value+1,
            name,
            label,
            status,
            Notes,
            number,

        };
        dispatch({type:"ADD",payload:data})
        console.log(members);

         toast.success("added successfully");
         navigate("/home");
    }
  return (
    <div className="row">
        <h1 className='display-2 text-center'>
            Add member
        </h1>
   
    <div className="col-md-8 shadow mx-auto p-5">
<form onSubmit={handleSubmit}>
    <div className='form-group'>
        <input type="text" placeholder='Name' className='form-control' value={name} 
        onChange ={e => setName(e.target.value) } />
    </div>
    <div className='form-group'>
        <input type="text" placeholder='company' className='form-control' value={label} 
        onChange ={e => setLabel(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="text" placeholder='Status' className='form-control' value={status} 
        onChange ={e => setStatus(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="date" placeholder='LastUpdated' className='form-control' value={number}
                onChange ={e => setNumber(e.target.value)}/>
                
    </div>
    <div className='form-group'>
        <input type="text" placeholder='Notes' className='form-control' value={Notes} 
        onChange ={e => setNotes(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="Submit" value='Add Member' className='btn btn-primary'/>
    </div>
</form>
        </div>
        </div>
  )
}

export default Add;