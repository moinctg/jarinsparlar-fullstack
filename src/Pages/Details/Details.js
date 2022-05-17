import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';


const Details = () => {
    const {service} = useParams();
    const [details,setDatails] = useState([]);


    useEffect ( ()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=>setDatails(data))
    }
        ,[])
    const newService = details.find(pd=>pd.id == service)
    console.log(newService);
    return (
        <div className='main-container'>
           <div>
           <img src={newService?.img} alt="" />
           </div>
            <div>
            <h2>{newService?.name}</h2>
            </div>
           
        </div>
    );
};

export default Details;