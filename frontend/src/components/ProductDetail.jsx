import React,{useEffect} from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getSingleProduct } from '../utilities/api-functions';
import { getSingleProductActionWithThunk } from '../redux/actions';
import Product from './Product';





function ProductDetail() {

    const params = useParams();



    const dispatch = useDispatch()
    
    

    

    useEffect(()=>{
        const {product_id} = params
       dispatch(getSingleProductActionWithThunk(product_id))
       
       
        
    },[])

 

  return (
    <Container>
      
      <Product   />
     
        
        </Container>
  )
}

export default ProductDetail