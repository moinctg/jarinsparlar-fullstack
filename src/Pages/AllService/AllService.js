import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {setServiceToCart} from '../../features/counter/counterSlice';
import './AllService.css';

const AllService = ({allservice}) => {
    const {name,category,price,description,img} = allservice;
    const dispatch = useDispatch();
    console.log(allservice);
    return (
        <div>

<div class="card-deck">
  <div class="card">
  {/* <p>ID:{id}</p> */}
    <img class="card-img-top" src={img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <h3 class="card-text">Category:{category}</h3>
      <p class="card-text">{description}</p>
      <p class="card-text">Price:{price}</p>
     
    </div>
  </div>
            {/* <div class="card">
                <p>ID:{id}</p>
  <img src={img} alt=""/>
    <h3>Name:{name}</h3>  
    <h3>Category:{category}</h3>
    <p>Discription:{description}</p>
    <p>Price:{price}</p>
    <p>lipsum lorem lorem</p>
    
  
  
</div> */}
  <Button onClick={ ()=>dispatch(setServiceToCart(allservice))}
                         className='buy-button'>Add to Cart</Button>
        </div>
        </div>
    );
};

export default AllService;