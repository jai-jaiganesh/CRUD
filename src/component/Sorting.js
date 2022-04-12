import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Sorting = () => {
    const members = useSelector((state)=>state);
    const[order,setorder]=useState("ASC");
  const dispatch=useDispatch();
    const[data,setData]=useState(members);
    const sorting =(col) =>{
        console.log("click");
        if(order === "ASC"){
            const sorted =[...members].sort((a,b)=>
            a[col].toLowerCase()>b[col].toLowerCase()?1:-1);
            setData(sorted);
            // console.log(sorted);
            dispatch({type:"SORTED",payload:sorted})
            setorder("DSC");
        }
        else if(order === "DSC"){
            const sorted =[...members].sort((a,b)=>
            a[col].toLowerCase()<b[col].toLowerCase()?1:-1);
            setData(sorted);
            // console.log(sorted);

            dispatch({type:"SORTED",payload:sorted})

            setorder("ASC");

        }
    };

    <tbody className="text-dark  text-center">
    {
        data.map((member,value)=>(
            <tr key={member.value}>
                {/* <td><input type="checkbox"/></td> */}
                {/* <td>{value+1}</td> */}
                <td>{member.name}</td>
    <td>{member.label}</td>
    <td>{member.status}</td>
    <td>{member.number}</td>
    <td>{member.Notes}</td>
    <td>
        {/* <Link to={`/edit/${member.value}`} className="btn btn-small btn-primary  m-1">Edit</Link> */}
    </td>
    </tr>
    

        ))
    }

</tbody>
return(
 <button class="btn  dropup-toggle"  id="dropdownMenuButton"  
 onClick={()=>sorting("name")} >Status</button>
  )
}

export default Sorting