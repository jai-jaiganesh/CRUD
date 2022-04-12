import { Route, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({component:Component,...rest})
{
    const{currentUser}=auth()
    const Navigate=useNavigate()
    return(
        <Route
        {...rest}
        render={props =>{
            return currentUser?<Component {...props}/>:Navigate("/Signin")

        }}
        ></Route>
    )
}