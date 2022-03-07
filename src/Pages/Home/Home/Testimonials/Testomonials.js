import React from 'react';
import './Testimonials.css';
import img1 from '../../../../images/Image/Ellipse 90.png';
import img2 from '../../../../images/Image/Ellipse 91.png';
import img3 from '../../../../images/Image/Ellipse 92.png';


const Testomonials = () => {
    return (
        <div className='Container mt-5'>
            <h1 className='text-center p-5'>Testimonials</h1>
            <div  className='row players '>
                <div className='col-md-4  '>
                    <div className='player'>
                    <img  src={img1}  alt=""></img>   
                   
                   <h3 className='player-name'>Nash Patrik <br/>
                   Ceo </h3>
                    </div>
                   
                    <div>
                <p className='p-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>    
                </div>         
                </div>
               
                <div className='col-md-4  '>
                    <div className='player'>
                    <img  src={img2}  alt=""></img>   
                   
                   <h3 className='player-name'>Nash Patrik <br/>
                   Ceo </h3>
                    </div>
                   
                    <div>
                <p className='p-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>    
                </div>         
                </div>

                
                <div className='col-md-4  '>
                    <div className='player'>
                    <img  src={img3}  alt=""></img>   
                   
                   <h3 className='player-name'>Nash Patrik <br/>
                   Ceo </h3>
                    </div>
                   
                    <div>
                <p className='p-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>    
                </div>         
                </div>
                


               
            </div>
        </div>
    );
};

export default Testomonials;