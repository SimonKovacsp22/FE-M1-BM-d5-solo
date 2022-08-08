import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {  } from 'react-router-dom'
import { useState,useEffect } from 'react'
import EditProductForm from './EditProductForm'
import { useSelector } from 'react-redux'



function Product(props) {
  
  const {price,category,_id,name,description,brand,imageUrl} = props 

  
  const [isEditing,setIsEditing] = useState(false)
  const location = useLocation()
 


  

   
  return (
    <div className='d-flex justify-content-between mt-5'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl } />
  <Card.Body>
    <Card.Title>{name }</Card.Title>
    <p>{category }</p>
    <p>{brand }</p>
    <Card.Text>
      {description }
    </Card.Text>
    <p>{price } $</p>
    {location.pathname==="/" ? <Link
    to={"/" + _id }
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