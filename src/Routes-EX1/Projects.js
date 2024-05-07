import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Projects =()=>
    {
        return <div>
            <h1>Projects</h1>
            <ul>
                <li>  <h6><NavLink to='/Projects/Minipro'>Mini Projects</NavLink></h6></li>
                <li> <h6><NavLink to='/Projects/Majorpro'>Major Projects</NavLink></h6></li>
            </ul>
          
           
            <Outlet></Outlet>
        </div>
    }

    export default Projects;