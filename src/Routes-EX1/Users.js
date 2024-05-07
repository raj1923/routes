import React from "react";
import userdata from "./userdata";
import { Link } from "react-router-dom";
const Users =()=>
    {
        return<div>
            <h3>User Names</h3>
        
                {
                    userdata.map((eachdata)=>
                    {
                        return<Link to={`/Users/${eachdata.id}`}>
                        <div key={eachdata.id}>
                            <h3>{eachdata.name}</h3>
                            </div>
                            </Link>
                    })
                }
          
        </div>
    }

    export default Users;