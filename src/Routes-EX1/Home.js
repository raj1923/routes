import React from "react";
import { useNavigate } from "react-router-dom";
import Sucess from "./Sucess";

const Home=()=>
    {

        const sucessnav = useNavigate();
        
       
        const Sucessfullyupdated =()=>
            {
                sucessnav('/Sucess');
            }
        return<div>
            <h1>Home</h1>
            <button onClick={Sucessfullyupdated}>Submit</button>
        </div>
    }

    export default Home;