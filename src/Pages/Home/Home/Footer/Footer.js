import React from 'react';
import './Footer.css';
import location from '../../../../images/location.png';

const Footer = () => {
    return (
        <div className="Container footer py-4 mt-4" >
            <div className="row">
                <div className="col-md-3">
                    
                    <p className='text-white p-5'>
                        <img  src={location} alt=""/> <br/>
                        95,Agrabad C/A,Agrabad,Chittagong</p>

                </div>
                <div className="col-md-3">
                    <h3 className='text-white p-4'>Company</h3>
                    <p className='text-white'>About</p> <br />
                    <p className='text-white'>Project</p> <br />
                    <p className='text-white'>Our Team</p> <br />
                    <p className='text-white'>Term Conditions</p> <br />
                    <p className='text-white'>Submit Lisiting</p> <br />

                </div>
                <div className="col-md-3">
                    <h3 className='text-white p-4'>Quick Links</h3>
                    <p className='text-white'>Quick Links</p> <br />
                    <p className='text-white'>Quick Links</p> <br />
                    <p className='text-white'>Quick Links</p> <br />
                    <p className='text-white'>Quick Links</p> <br />
                    <p  className='text-white'>Quick Links</p> <br />

                </div>
                <div className="col-md-3 p-4">
                    <h3 className='text-white'>About Us</h3>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <div className='col-6 col-lg-3'>
                              
                                <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-twitter fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                </div>
                             </div>   
                         </div>
                </div>

          

          
        </div>
    );
};

export default Footer;