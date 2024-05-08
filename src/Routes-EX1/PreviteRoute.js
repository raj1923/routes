import React from "react";
import { Auth } from "./Auth";
import { Navigate } from "react-router-dom";
const Privateroute =({children})=>
    {

        const {authuser} = Auth();
        if(!authuser)
            {
                return <Navigate to="/login"/>
            }
        else{
            return children;
        }



    }

    export default Privateroute;