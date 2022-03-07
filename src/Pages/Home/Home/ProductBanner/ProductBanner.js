import React from 'react';
import './ProductBanner.css';
import img from '../../../../images/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const ProductBanner = () => {
    return (
        <div className='Container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='p-3' src={img} width={'580px'} height={'381px'} alt=""></img>

                </div>
                <div className='col-md-6'>
                    <h1>
                        Let us handle your screen<br />
                        <span className='header'> Professionally.</span>
                    </h1>
                    <p className='h-50'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

               <div className='d-flex justify '>
               <p className='p-3 txt'> <span className='client'> 500+ <br/> </span>
                Happy Customer 
                
                </p>
                <p  className='p-3 txt '> <span className='client'> 16+ <br/> </span>
                Total Service 
                
                </p>

               </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;