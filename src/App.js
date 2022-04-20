import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Cards from './Cards';
import Navbaro from './Navbaro';
import './App.css';


function App() {
  const greeting = "greeting";
  
  return (
    
    <div className="container">
      
      <div className="">
      <Navbaro />
      </div>
      <h1 id={greeting}>Hello, World</h1>
     <Cards />
    </div>
    
  );
}

export default App;
