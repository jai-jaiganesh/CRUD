import React, { useEffect, useState }  from 'react';
import { Link,useParams } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom'

const Edit = () => {
    const {value}=useParams();
    const members = useSelector((state)=>state);
    const currentMember = members.find((member)=>member.value === parseInt(value));
    const dispatch= useDispatch();
    const navigate = useNavigate() // insvaluee the function
   
    useEffect(()=>{
        if(currentMember){
            setName(currentMember.name);
            setLabel(currentMember.label);
            setStatus(currentMember.status);
            setNotes(currentMember.Notes);
            setNumber(currentMember.number);

        }
    },[currentMember])
    const [name,setName]=useState("");
    const [label,setLabel]=useState("");
    const [status,setStatus]=useState("");
    const [Notes,setNotes]=useState("");
  const[number,setNumber]=useState("");
  const handleSubmit =(e) =>{
    e.preventDefault();

    const data={
        value:parseInt(value),
        name,
        label,
        status,
        Notes,
        number,

    };
    dispatch({type:"UPDATE",payload:data})
     toast.success("UPDATED successfully");
     navigate("/home");
}
  return (
      <div>
    <h1 className='display-2 text-center'>
    update member {value}
</h1>
    <div className="col-md-8 shadow mx-auto p-5">
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input type="text" placeholder='Name' className='form-control'  value={name} 
        onChange ={e => setName(e.target.value) }/>
        </div>
        <div className='form-group'>
            <input type="text" placeholder='company' className='form-control' value={label} 
        onChange ={e => setLabel(e.target.value)} />
        </div>
        <div className='form-group'>
            <input type="text" placeholder='Status' className='form-control' value={status} 
        onChange ={e => setStatus(e.target.value)}/>
        </div>
        <div className='form-group'>
            <input type="date" placeholder='LastUpdated' className='form-control' value={number}
                onChange ={e => setNumber(e.target.value)} />
        </div>
        <div className='form-group'>
            <input type="text" placeholder='Notes' className='form-control' value={Notes} 
        onChange ={e => setNotes(e.target.value)}/>
        </div>
        <div className='form-group '>
            <input type="Submit" value='update Member' className='btn btn-primary' />
            <Link to ="/home" className='btn btn-danger ml-3 '>
                cancel
            </Link>
        </div>
    </form>
            </div>
            </div>
            
  )
}

export default Edit;