import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MultiSelectAll from './MultiSelect';
import {useState} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { MdDelete } from "react-icons/md";

// import logout from "./LogOut";
import { auth } from "./firebase";
import LogOut from "./LogOut";
import Sorting from "./Sorting";
function Home (){
    const members = useSelector((state)=>state);

    const[user,setUser]=useState({})
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    
const dispatch =useDispatch();
    const deleteContact = (value)=>{

dispatch({type:"DELETE",payload:value})
toast.success("Deleted Successfully");
}
    return(
        <div className="row ">
            <h4>Hello{user?.email}</h4>
{/* <LogOut /> */}
            <div className="text-center mt-4">
                <Link to ="/add" className="btn btn-primary">
                    Add Member
                </Link>
            </div>
            <div className="col-md-9  mx-auto p-5">
                <table className="m-1">
            <th><MultiSelectAll /></th>
            {/* <button class="btn  dropup-toggle"  id="dropdownMenuButton"  aria-haspopup="true" aria-expanded="false"
            onClick={()=>sorting("status")} > status
  </button> */}
       <Sorting />

        </table>
        <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
            <tr>

            <th>Name</th>
            <th>Company</th>
            <th>Status</th>
            <th>LastUpdated</th>
            <th>Notes</th>
            <th>Action</th>
            </tr>
            </thead>
            <tbody className="text-dark  text-center">
                {
                    members.map((member,value)=>(
                        <tr key={value}>
                            {/* <td><input type="checkbox"/></td> */}
                            {/* <td>{value+1}</td> */}
                            <td>{member.name}</td>
                <td>{member.label}</td>
                <td>{member.status}</td>
                <td>{member.number}</td>
                <td>{member.Notes}</td>
                <td>
                    {/* <Link to={`/edit/${member.value}`} className="btn btn-small btn-primary  m-1">Edit</Link> */}
                    <button type="button" onClick={()=>deleteContact(member.value)}  className="btn btn-small btn-danger ml-5">                    <MdDelete/>
</button>
                </td>
                <td>
              

                </td>
                </tr>
                

                    ))
                }
           
            </tbody>
      </table>
      </div>
        </div>
    )
    
}

export default Home;