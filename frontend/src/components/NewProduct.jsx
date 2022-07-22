import React from 'react'
import {Form} from 'react-bootstrap'

function NewProduct() {
  return (
<Form>
        <Form.Group>
        <Form.Label>Name</Form.Label>
      <Form.Control size="lg" type="text" placeholder="Name" />
      <Form.Label>brand</Form.Label>
      <Form.Control  type="text" placeholder="Brand" />
      <Form.Label>category</Form.Label>
      <Form.Control  type="text" placeholder="Category" />
      <Form.Label>price</Form.Label>
      <Form.Control  type="text" placeholder="Price" />
    </Form.Group>
    <Form.Group>
        
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
</Form>
  )
}

export default NewProduct