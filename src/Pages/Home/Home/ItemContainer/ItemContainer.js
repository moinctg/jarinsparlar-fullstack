import React, {useEffect} from 'react';
import {Col,Container,Nav,Row,Tab} from 'react-bootstrap';
import  { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {fetchService,setDisplayService,setServiceCategory} from '../../../../features/counter/counterSlice';
import AllService from '../../../AllService/AllService';
import Service from '../Service/Service';
import './ItemContainer.css';
const ItemContainer = () => {
    const dispatch = useDispatch();
    const displayServices = useSelector(state=> state.services.displayServices)
    const allServices = useSelector(state=> state.services.AllServices)
    useEffect( ()=>{
        dispatch(setDisplayService())

    }
        ,[allServices])

    useEffect( () =>{
        dispatch(fetchService())
    }
        ,[])
    return (
        <div>
            <div id="shop-container" className="mt-5 text-center">
            <h2 style={{fontWeight:"700"}} className='mb-0'>Trending Item</h2>
            <div style={{display:"flex",justifyContent:'center'}}>
            <hr style={{width:"50px",color:"#FF8700",height:"3px"}}/>
            </div>
            <div className='my-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} className='mb-4'>
                    <Nav variant="pills" style={{justifyContent:'center'}}>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setServiceCategory('Facial and Skin Treatment'))} eventKey="first">Facial and Skin </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setServiceCategory('Manicure and Pedicure'))} eventKey="second">Mainicure </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setServiceCategory('Hair Treatment'))} eventKey="three">Hair Treatment</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Container>
                        <div className="card-container">
                         {
                             displayServices.map( p => <AllService  key={p._id} allservice={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Container>
                        <div className="card-container">
                         {
                             displayServices.map( p => <AllService key={p._id} allservice={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                        <Container>
                        <div className="card-container">
                         {
                             displayServices.map( p => <AllService  key={p._id} allservice={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
        </div>
            
        </div>
    );
};

export default ItemContainer;