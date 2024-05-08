import React, { useState } from "react";
import { Auth } from "./Auth";
import { useNavigate } from "react-router-dom";
const Login =()=>
    {
        const {login, getmessage} = Auth();
        const navigate = useNavigate();
        

        const [username,setusername ] = useState();


        return<div>
            <h1>Login</h1>
            
            <input type= "text" name="name" id="name" value={username} onChange={(e)=>setusername(e.target.value)}
            placeholder="Username"></input> 
            <p style={{color:"red"}}>{getmessage}</p>
            <button onClick={()=> {login(username); navigate("/", {replace:true})}}> Login</button>
        </div>
    }

    export default Login;