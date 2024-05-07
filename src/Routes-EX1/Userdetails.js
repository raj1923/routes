import React from "react";
import { useParams } from "react-router-dom";
import userdata from "./userdata";
const Usersdetails =()=>
    {
        const {userid} = useParams();
        console.log(userid)
        return<div>
            <h1>User Details</h1>
            {
                userdata.map((eachdata)=>
                {
                    if(eachdata.id == userid)
                        {
                            return<div>
                                <h3>{eachdata.name}</h3>
                                <h3>{eachdata.email}</h3>
                                <h3>{eachdata.address.city}</h3>
                                <h3>{eachdata.phone}</h3>
                                </div>
                        }
                })
            }

        </div>
    }
    export default Usersdetails;