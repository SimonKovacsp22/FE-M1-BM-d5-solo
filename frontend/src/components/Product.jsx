import React from 'react'
import {Card,Button} from 'react-bootstrap'

function Product(props) {

    const {price,category,product_id,name,description,brand,imageUrl} = props
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>{category}</p>
    <p>{brand}</p>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">WIEW ME</Button>
    <span>{price}</span>
  </Card.Body>
</Card>
  )
}

export default Product