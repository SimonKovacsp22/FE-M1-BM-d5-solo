import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {  } from 'react-router-dom'
import { useState,useEffect } from 'react'
import EditProductForm from './EditProductForm'
import { useSelector } from 'react-redux'



function Product(props) {
  const product =useSelector(state=>state.update.updated)
  const {price,category,product_id,name,description,brand,imageUrl} = props 
  
  const [isEditing,setIsEditing] = useState(false)
  const location = useLocation()
  const [data,setData] = useState(product)

  useEffect(()=>{
    setData(prevData=>{
      if(prevData!==data) return data
      
    }) 

  },[data])
  

   
  return (
    <div className='d-flex justify-content-between mt-5'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl || data.imageUrl} />
  <Card.Body>
    <Card.Title>{name || data.name}</Card.Title>
    <p>{category || data.category}</p>
    <p>{brand || data.brand}</p>
    <Card.Text>
      {description || data.description}
    </Card.Text>
    <p>{price || data.price} $</p>
    {location.pathname==="/" ? <Link
    to={"/" + product_id }
    >
      
      <Button className='mb-2' variant="primary">Detail</Button></Link>
  :<Button className='mb-2'
  onClick={()=> setIsEditing(true)}
  variant="dark">Edit</Button>
  }
    
  </Card.Body>
</Card>

{isEditing && <EditProductForm  />}
</div>
  )
}

export default Product