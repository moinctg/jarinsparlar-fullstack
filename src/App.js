

import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
import AuthProvider from './context/AuthProvider';
import Navber from './Pages/Home/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Home/Home/Contact/Contact';
function App() {
  return (
    
      <AuthProvider>
     <Router>
       <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
       
       
      </Routes>
      </Router>
    </AuthProvider>
      
    
  );
}

export default App;
