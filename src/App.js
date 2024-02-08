import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './app/Pages/HomeScreen';

const App = () =>{
  const user ={
    name:"john",
    email:"john@gmail.com",
    pass:"john123"
  }
  return (
    <div className="app">
      
      <Router>
         {
          !user ?(
          <h1>Login Screen</h1>
          ):(
            /* accessing parent and child relationship using route*/
          <Routes>

          <Route path="/" element={<HomeScreen />}/>
          </Routes>
         )}
         </Router>
    </div>
    
  )
}

export default App