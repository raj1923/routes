import React, { createContext, useState } from "react";
import { useContext } from "react";
import userdata from "./userdata";

 const Authcontext = React.createContext();
 
    
 
 export const Authprovider =({children})=>
    {
        const [getuser,setuser] = useState(userdata);
        
        const [authuser, authsetuser] =useState();

        const [getmessage, setmessage] = useState();

        

       
        const login =(name)=>
            {
               const logindata = getuser.find((eachdata)=>
                {
                    
                    if(name == eachdata.username)
                        {
                            return  {
                                eachdata
                            }
                            
                        }
                    else
                    {
                        return(
                        null
                        )
                    }
                })

               
                if(logindata !== undefined &&  logindata !== null)
                    {
                        authsetuser(logindata.username)
                    }
                else
                {
                    authsetuser(null);
                    setmessage("Please Enter Correct User Name")
                }
                


                
            }
        const logout =() =>
            {
                authsetuser(null);
                setmessage("")
            }
        
        return   <Authcontext.Provider value={{getuser,authuser,login, logout,getmessage}}>{children}</Authcontext.Provider>
    }

export const Auth =()=>
    {
        return useContext(Authcontext);
    }