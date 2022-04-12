import React from 'react';
import { ToastContainer } from 'react-toastify';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./component/Home";
import Add from './component/Add';
import Edit from './component/Edit';
import Signup from './component/Signup';
import Signin from './component/Signin';
// import { IconName } from "react-icons/fa";
// require('dotenv').config()
function App() {
  return (
    <div className="App">

       <ToastContainer />

      <Routes>
      <Route  path="/" element={<Signup />} />
      <Route  path="/Signin" element={<Signin />} />
       <Route exact  path="/home" element={<Home />} />

       <Route  path="/add" element={<Add />} />
       <Route  path="/edit/:value" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
