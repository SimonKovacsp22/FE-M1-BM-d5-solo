import React from 'react'
import { useLocation } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import EditProductForm from './EditProductForm'

function Product(props) {

   const [isEditing,setIsEditing] = useState(false)

    const {price,category,product_id,name,description,brand,imageUrl} = props
    const location = useLocation()
  return (
    <div className='d-flex justify-content-between mt-5'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>{category}</p>
    <p>{brand}</p>
    <Card.Text>
      {description}
    </Card.Text>
    {location.pathname==="/" ? <Link
    to={"/" + product_id}
    ><Button variant="primary">Detail</Button></Link>
  :<Button
  onClick={()=> setIsEditing(true)}
  variant="dark">Edit</Button>
  }
    <span>{price}</span>
  </Card.Body>
</Card>

{isEditing && <EditProductForm/>}
</div>
  )
}

export default Product