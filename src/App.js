import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import ProfileScreen from "./app/Pages/ProfileScreen/ProfileScreen"
import LoginScreen from './app/Pages/LoginScreen/LoginScreen';
import HomeScreen from './app/Pages/HomeScreen';

const App = () =>{
  const user =null
  return (
    <div className="app">
      
      <Router>
         {
          !user ?(
         <LoginScreen/>
          ):(
            /* accessing parent and child relationship using route*/
          <Routes>
            <Route path="/profile"element={<ProfileScreen/>}/>

          <Route path="/" element={ <HomeScreen />}/>
          </Routes>
         )}
         </Router>
    </div>
    
  )
}

export default App