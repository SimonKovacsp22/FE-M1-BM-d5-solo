import React,{useState} from 'react'
import { useRef } from 'react'
import {Form,Button} from 'react-bootstrap'
import { postProduct,handleFileSend } from '../utilities/api-functions'

const postProductUrl = 'http://localhost:3002/products'


const sampleProduct = {
    name:'',
    category:'',
    brand:'',
    price: 0,
    description:'',
    imageUrl:''
}

function NewProduct() {

  const [selectedFile,setSelectedFile] = useState(null)
  const[newId,setNewId] = useState('')
  const fileRef = useRef(null)

    function handleSubmit(e) {
      e.preventDefault()
    }

  
    

    const [product,setProduct] = useState(sampleProduct)

  return (
    <Form 
    onSubmit={handleSubmit}
    className='new-product-form'>
        <Form.Group className='row'>
       <Form.Group className='col mb-2'>
            <Form.Label>Name</Form.Label>
      <Form.Control 
      value={product.name}

      onChange={(e)=> {
        setProduct({...product, name: e.target.value})
      }}
      size="lg" type="text"  />
       </Form.Group>
  
  <div className='d-flex w-100 mb-2'>
  <Form.Group className='col'>
      <Form.Label>Brand</Form.Label>
          <Form.Control
          value={product.brand}
          onChange={(e)=> {
            setProduct({...product, brand: e.target.value})
          }}
          type="text"  />
  </Form.Group>
      <Form.Group className='col'>
          <Form.Label>Category</Form.Label>
          <Form.Control
          value={product.category}
          onChange={(e)=> {
            setProduct({...product, category: e.target.value})
          }}
          type="text"  />
      </Form.Group>
  </div>
  

    <div className='d-flex w-100 mb-2 mt-3'>
        
       <Form.Group className='col'><input ref={fileRef} type={"file"}></input>
       </Form.Group>
       <Form.Group className='col d-flex'>
      
        <Form.Control 
        value={product.price}
        onChange={(e)=> {
            setProduct({...product, price: e.target.value})
          }}
        className='w-25 ' type='number' placeholder='price' />
        <Form.Label className='new-product-curr-label'>$</Form.Label>
        </Form.Group>
    </div>
    
    <Form.Group className='col'  controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control
    value={product.description}
    onChange={(e)=> {
        setProduct({...product, description: e.target.value})
      }}
    as="textarea" rows={3} />
  </Form.Group>
  </Form.Group>

<Form.Group className='d-flex'>
      <Button 
      onClick={()=>{ postProduct(product,postProductUrl).then(response => setNewId(response)).then(handleFileSend(fileRef.current.files[0],newId.id))
       
        
      
      }}
      variant='success'>
       Save
      </Button>
</Form.Group>

  </Form>
  )
}

export default NewProduct