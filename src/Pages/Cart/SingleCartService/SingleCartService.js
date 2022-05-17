import React from 'react';
import {Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increaseServiceQuantity,deleteFromCart,decreaseServiceQuantity } from '../../../features/counter/counterSlice';
import './SingleCartService.css';
const SingleCartService = ( { service }) => {
    const { name,img,price,quantity} = service;
    console.log(service)
    const dispatch = useDispatch();
    let disable = true;
    if (quantity>1){
        disable=false;
    }

    return (
        <Container className="mb-2">
            <div className="cart-product-container">
                <div className="product-name">
                    <img style={{width:'100px',height:'100px'}} src={img} alt="" />
                    <b>{name}</b>
                </div>
                <div className="product-info">
                    <div className="price">
                        <b>${price*quantity}.00</b>
                    </div>
                    <div className="quantity">
                        <div className='quantity-box'>
                            <button disabled={disable} onClick={()=>dispatch(decreaseServiceQuantity(service))}><i class="fas fa-minus"></i></button>
                            <input style={{border:'1px solid black',width:'100%',color:'black',textAlign:'center'}} type="text" value={quantity} disabled />
                            <button onClick={()=> dispatch(increaseServiceQuantity(service))}><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="delete text-center">
                        <i onClick={ ()=>dispatch(deleteFromCart(service))} class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
            <hr />
        </Container>
    );
};

export default SingleCartService;