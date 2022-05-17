import React ,{ useEffect } from 'react';
import {Button,Container} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {setCartPrice} from '../../features/counter/counterSlice';
import './Cart.css';
import SingleCartService from './SingleCartService/SingleCartService';

const Cart = () => {
    const cartService = useSelector(state => state.services.cartService);
    const cartPrice = useSelector( state =>state.services.cartPrice);
    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch (setCartPrice())
    },[cartService])
        console.log(cartPrice)
        console.log(cartService);
    return (
        <Container className="my-3">
            <h3 className='text-center'>Shopping Cart</h3>
            <p className='text-center mb-5'>{cartService.length} Items in your cart !</p>
            {
                cartService.length > 0 && <><div className="cart-product-container">
                <div className="product-name">
                    <b>Products</b>
                </div>
                <div className="product-info">
                    <div className="price">
                        <b>Price</b>
                    </div>
                    <div className="quantity text-center">
                        <b>Quantity</b>
                    </div>
                    <div className="delete text-center">
                        <b>Cancel</b>
                    </div>
                </div>
            </div>
            <hr/>
            {
                cartService.map( pd =><SingleCartService key={pd._id} service={pd}/>)
            }
            <div className='subtotal-box my-4'>
                <div className="go-back">
                   <NavLink className="go-back-link" to="/"> <i class="fas fa-arrow-left"></i> Continue Shopping </NavLink> 
                </div>
                <div className="subtotal text-center">
                    <h5>Subtotal:</h5>
                    <h3>${cartPrice}.00</h3>
                    <NavLink to="/checkout"><Button className="px-5">Checkout</Button></NavLink>
                </div>
            </div></>
            }
            
            
        </Container>
    );
};

export default Cart;