import React,{useEffect} from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from '../utilities/api-functions';
import Product from './Product';



function ProductDetail() {

    const params = useParams();
    const [product,setProduct] = useState({})

    useEffect(()=>{
        const {product_id} = params
        const singleProductUrl = "http://localhost:3002/products/" + product_id
       
        getSingleProduct(singleProductUrl).then(product => setProduct(product))
    },[])

  return (
    <Container>
        <Product {...product} />
        </Container>
  )
}

export default ProductDetail