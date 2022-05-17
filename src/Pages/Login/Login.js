import React, { useState } from 'react';
import {  Button, Modal, NavLink, } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import './Login.css'
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginFromData ,  setLoginFromData] = useState({})
    const { user, googleSignIn, loginUser, modal, setModal } = useAuth()
    // console.log(googleSignIn);
    const location = useLocation();
    const navigator = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        setLoginFromData(newLogindata)
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        loginUser({...loginFromData.email,...loginFromData.password,location,navigator})
    }
    const handleGoogleSignIn = () =>{
      googleSignIn (location,navigator)

    }
     console.log(handleGoogleSignIn)
    return (
        <div className='container mt-5'>
           <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Login Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully logged in !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/dashboard">Go To Home</Link>
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="col-lg-12" >
      <form className="form" onSubmit={handleLoginSubmit} >
            <div className='main-form p-3'>
                <h2>Login With </h2>
                <div className="col-lg-12">
                
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                     name="email"
                     className="form-control input"
                     
                      id="inputEmail3"
                       onBlur={handleOnBlur}  label="email" 
                       required/>
                       </div>
                </div>
                <div className="col-lg-12">

             
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                     className="form-control input"
                     type="password" 
                     name='password' 
                     id="inputPassword3"
                     onBlur={handleOnBlur } label='password'
                     required />
                </div>
               
                <input className="input" type="submit" value='LOGIN' /> <br/>
                  <p className="text-center">--------Or--------</p>
                <button className="" onClick={ handleGoogleSignIn}><img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /></button>
                
                    <NavLink as={Link} to='/register' >Don't have account? create an account</NavLink>
                   
                    </div>
            </div>
        </form>

      </div>
       
        </div>
    );
};

export default Login;