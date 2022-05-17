

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
import AllServices from "./Pages/AllServices/AllServices";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Details from "./Pages/Details/Details";
import Testimonials from "./Pages/Home/Home/Testimonials/Testomonials";
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
        <Route path="/testimonials" element={<Testimonials></Testimonials>} />
        <Route path="/cart" element={<PrivateRoute><Cart></Cart></PrivateRoute>} />
        <Route path="/checkout" element={ <PrivateRoute><Checkout></Checkout></PrivateRoute>} />
        <Route path="/allservices" element={<AllServices></AllServices>} />
        <Route path="/details:id/" element={<Details></Details>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
      
       <Route path={`dashboard`} element={ <PrivateRoute><Review></Review></PrivateRoute>} />
       <Route path={`dashboard/review`} element={<Review></Review>} />
       <Route path={`dashboard/addadmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>} />
       <Route path={`dashboard/addProduct`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>} />
        
      </Routes>
      </Router>
    </AuthProvider>
      
    
  );
}

export default App;
