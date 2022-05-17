import React from 'react';
import { useState,useEffect } from 'react';
import './AllServices.css';
// import Navbar from '../Home/Shared/Navbar/Navbar';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [allService,setAllService] = useState([]);
    useEffect( ()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=>setAllService(data))
        // console.log(data);
    }
        ,[])
    return (
        <div className='container'>
            {/* <Navbar></Navbar> */}
            <h2 className='text-center'>Our Service </h2>
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