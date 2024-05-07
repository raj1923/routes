import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =()=>
    {
        return <div className="card">
            <nav>
            <ul>
                <li><NavLink to='/'>Home </NavLink></li>
                <li><NavLink to='/About'>About </NavLink></li>
                <li><NavLink to='/Contact'>Contact </NavLink></li>
                <li><NavLink to='/Projects'>Projects</NavLink></li>
                <li><NavLink to='/Users'>Users</NavLink></li>
            </ul>
    
            </nav>
        </div>
    }

    export default Navbar;