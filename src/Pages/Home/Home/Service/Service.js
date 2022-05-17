import React from 'react';
import { useDispatch } from 'react-redux';
import { setServiceToCart } from '../../../../features/counter/counterSlice';
import './Service.css'

const Service = (service) => {
const  {name,category,price,description,img} = service;
console.log(service);
const dispatch = useDispatch();
    return (
        <div className="shadow border">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="card-info p-2">
                <div className="price-div">
                    <p style={{textAlign:'left',marginBottom:'5px',fontWeight:"500"}}>{name}</p>
                    <p style={{textAlign:'left',marginBottom:'5px',fontWeight:"500"}}>${price}.00</p>
                </div>
                <div onClick={ ()=> dispatch(setServiceToCart({...service,quantity: 1}))} className="cart-div">
                    <i class="fas fa-cart-plus"></i><span> Add To Cart</span>
                </div>
                {/* <button></button> */}
            </div>
        </div>
    );
};

export default Service;