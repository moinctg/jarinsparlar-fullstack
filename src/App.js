

import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
import AuthProvider from '/-context/authProvider'
import Navber from './Pages/Home/Shared/Navber/Navber';
import Home from './Pages/Home/Home/'
function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        {/* <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />       
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/checkout" element={<PrivateRoute> <Checkout></Checkout> </PrivateRoute>} />  
    
     */}
       
      </Routes>
      </Router>
    </AuthProvider>
      
    </div>
  );
}

export default App;
