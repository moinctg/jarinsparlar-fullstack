import React from 'react';
import './Banner.css';
import img from '../../../../images/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const Banner = () => {
    return (
        <div className='Container'>
            <div className='row'>
                <div className='col-md-6 p-5'>
                    <h1>BEAUTY SALON <br />
                        FOR EVERY WOMEN
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <button className='button text-white'>Get an Appointment</button>

                </div>
                <div className='col-md-6  p-5'>
                    <img src={img} width={'484px'} height={'478px'} alt=""></img>

                </div>
            </div>

        </div>
    );
};

export default Banner;