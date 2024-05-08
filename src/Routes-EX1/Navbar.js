import React from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "./Auth";

const Navbar =()=>
    {
        const {authuser, logout} = Auth();
        
        return <div className="card">
            <nav>
            <ul>
                <li><NavLink to='/'>Home </NavLink></li>
                <li><NavLink to='/About'>About </NavLink></li>
                <li><NavLink to='/Contact'>Contact </NavLink></li>
                <li><NavLink to='/Projects'>Projects</NavLink></li>
                <li><NavLink to='/Users'>Users</NavLink></li>
                 {authuser ? (
                     <li><NavLink to='/Logout' onClick={logout}>Logout</NavLink></li>
                    ) : <li><NavLink to='/Login'>Login</NavLink></li>}

            </ul>
    
            </nav>
        </div>
    }

    export default Navbar;