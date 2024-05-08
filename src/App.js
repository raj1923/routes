import React from 'react';
import './App.css';
import Home from './Routes-EX1/Home';
// import About from './Routes-EX1/About';
import Contact from './Routes-EX1/Contact';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Routes-EX1/Navbar';
import Sucess from './Routes-EX1/Sucess';

//import Projects from './Routes-EX1/Projects';
import Minipro from './Routes-EX1/Minipro';
import Majorpro from './Routes-EX1/Majorpro';
import Users from './Routes-EX1/Users';
import Usersdetails from './Routes-EX1/Userdetails';
import { Authprovider } from './Routes-EX1/Auth';
import Login from './Routes-EX1/login';
import Logout from './Routes-EX1/Logout';
import Privateroute from './Routes-EX1/PreviteRoute';
const Aboutlazy = React.lazy(()=> import ("./Routes-EX1/About"))

const Projecrslazy = React.lazy(()=> import ("./Routes-EX1/Projects"))




const App=()=> {
  return (
    
    <Authprovider className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Privateroute><Home/></Privateroute>}/>
        <Route path='/About' element={ <React.Suspense> <Aboutlazy/></React.Suspense>}/>
        <Route path='/Contact' element={  <Contact />}/>
        <Route path='/Sucess' element={  <Sucess />}/>
       
          <Route path="/Projects" element={<React.Suspense><Projecrslazy/></React.Suspense>} >
          <Route path="Minipro" element={<Minipro/>} />
          <Route path="Majorpro" element={<Majorpro/>} />

          </Route>
        <Route path="/Users" element={<Privateroute>< Users/></Privateroute>}/>
        <Route path="/Users/:userid" element={< Usersdetails/>}/>
        <Route path='/Login' element={<Login/> }/>
        <Route path='/Logout' element={<Logout/> }/>
        


        
      </Routes>
   
    </Authprovider>
  );
}

export default App;
