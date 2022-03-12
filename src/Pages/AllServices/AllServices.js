import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../Home/Shared/Navbar/Navbar';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [allService,setAllService] = useState([]);
    useEffect( ()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setAllService(data))
    }
        ,[])
    return (
        <div className='row'>
            <Navbar></Navbar>
            <h2>Our Service</h2>
            <div className='product-container'>
            {
                    allService.map(allservice => <AllService
                    key={allservice._id}
                    allservice={allservice}
                    >

                    </AllService>)
                }
                
                </div>
            
        </div>
    );
};

export default AllServices;