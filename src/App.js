import React from 'react';
import './App.css';
import Home from './Routes-EX1/Home';
import About from './Routes-EX1/About';
import Contact from './Routes-EX1/Contact';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Routes-EX1/Navbar';
import Sucess from './Routes-EX1/Sucess';

import Projects from './Routes-EX1/Projects';
import Minipro from './Routes-EX1/Minipro';
import Majorpro from './Routes-EX1/Majorpro';
import Users from './Routes-EX1/Users';
import Usersdetails from './Routes-EX1/Userdetails';

const App=()=> {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Contact' element={  <Contact />}/>
        <Route path='/Sucess' element={  <Sucess />}/>
       
          <Route path="/Projects" element={<Projects/>} >
          <Route path="Minipro" element={<Minipro/>} />
          <Route path="Majorpro" element={<Majorpro/>} />

          </Route>
        <Route path="/Users" element={< Users/>}/>
        <Route path="/Users/:userid" element={< Usersdetails/>}/>


        
      </Routes>
    </div>
  );
}

export default App;
