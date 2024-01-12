import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Card2 from './screens/Card2'
function App() {
  return (
    <div >
      <Navbar/>
     {/* <div > <Home/></div> */}

     <div> <Card2/></div>
    </div>
  );
}

export default App;
