

import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
import AuthProvider from './context/authProvider';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Home/Home/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import OurTeam from './Pages/OurTeam/OurTeam';
import Dashboard from './Pages/Dashboard/Deshboard/Dashboard';
import PrivateRoute from './Pages/PrivateRoute';
import Review from './Pages/Dashboard/User/Review/Review';
import AddAdmin from './Pages/Dashboard/Admin/AddAdmin/AddAdmin';
import AddProduct from './Pages/Dashboard/AddProducts/AddProducts';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
function App() {
  return (
    
      <AuthProvider>
     <Router>


      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/ourteam" element={<OurTeam></OurTeam>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
       <Route path={`dashboard`} element={<Review></Review>} />
       <Route path={`dashboard/review`} element={<Review></Review>} />
       <Route path={`dashboard/addadmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>} />
       <Route path={`dashboard/addproduct`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>} />
        
      </Routes>
      </Router>
    </AuthProvider>
      
    
  );
}

export default App;
