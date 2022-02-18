import React from 'react';
import img1 from '../../../../images/Icon/Group 1373.png';
import img2 from '../../../../images/Icon/Group 1372.png';
import img3 from '../../../../images/Icon/Group 1374.png';

const Services = () => {
    return (
        <div className='Container mt-4'>
            <div className='row'>
                <h3 className='text-center'>Our Awesome  <span>Services</span> </h3>
                <div className='col-md-4'>
                    <img className='img-fluid mt-4' src={img1} height={'42px'} width={'42'} alt=""></img>
                    <p>Anti Age Face Treatment</p>
                    $99
                    <p className='p-3'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>

                </div>
                <div className='col-md-4'>
                    <img src={img2} height={'42px'} width={'42'} alt=""></img>
                    <p>Hair Color & Styleing</p>
                    $199
                    <p className='pt-3'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>

                </div>
                <div className='col-md-4 p-3'>
                    <img src={img3} height={'42px'} width={'42'} alt=""></img>
                    <p>Skin Care Treatment</p>
                    $299
                    <p className='pt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>


                </div>

            </div>


        </div>
    );
};

export default Services;