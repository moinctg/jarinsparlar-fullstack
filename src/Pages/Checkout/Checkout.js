import React,{useState} from 'react';

import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';


const Checkout = () => {
    const cartService = useSelector(state=>state.services.cartService)
    const cartPrice = useSelector(state=>state.services.cartPrice)
    const {user} = useAuth();

    // const onSubmit = data=>console.log(data);
    // console.log(cartPrice)
   
        const order = {
            cus_name:user?.displayName,
            cus_email:user?.email,
            product_name:cartService[0],
            product_image:cartService[0],
            total_amount:cartPrice,
        }
        console.log(order)
    fetch(`http://localhost:8000/init`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(order)
  })
  .then(res=>res.json())
  .then(data=>{
    window.location.replace(data);
    
  })
    
    return (
        <div>
                {/* <button onClick={()=> parchase()}className='button-primary'>Pay</button> */}
        </div>
    );
};

export default Checkout;