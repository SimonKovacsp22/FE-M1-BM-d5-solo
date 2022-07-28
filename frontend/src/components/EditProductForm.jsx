import {useState,useRef} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {updateProduct} from '../utilities/api-functions'
import {getSingleProductActionWithThunk} from '../redux/actions/index'

function handleSubmit(e) {
  e.preventDefault()
}

function EditProductForm() {

  const data = useSelector(state=> state.update.updated)

  const [updatedProd,setUpdatedProd] = useState(data)

  const dispatch = useDispatch()

  const fileInputRef = useRef()
  return (
    <Form 
    onSubmit={handleSubmit}
    className='new-product-form ms-5 mb-0 mt-0'>
        <Form.Group className='row'>
       <Form.Group className='col mb-2'>
            <Form.Label>Name</Form.Label>
      <Form.Control 
      value={updatedProd.name}

      onChange={(e)=> {
        setUpdatedProd({...updatedProd,name:e.target.value})
       
      }}
      size="lg" type="text"  />
       </Form.Group>
  
  <div className='d-flex w-100 mb-2'>
  <Form.Group className='col'>
      <Form.Label>Brand</Form.Label>
          <Form.Control
          value={updatedProd.brand}
          onChange={(e)=> {
            setUpdatedProd({...updatedProd,brand:e.target.value})
          }}
          type="text"  />
  </Form.Group>
      <Form.Group className='col'>
          <Form.Label>Category</Form.Label>
          <Form.Control
          value={updatedProd.category}
          onChange={(e)=> {
            setUpdatedProd({...updatedProd,category:e.target.value})
          }}
          type="text"  />
      </Form.Group>
  </div>
  

    <div className='d-flex w-100 mb-2 mt-3'>
        
       <Form.Group className='col'><input ref={fileInputRef}
      
       type={"file"}></input>
       </Form.Group>
       <Form.Group className='col d-flex'>
      
        <Form.Control 
        value={updatedProd.price}
        onChange={(e)=> {
          setUpdatedProd({...updatedProd, price:e.target.value})
          }}
        className='w-50 ' type='number' placeholder='price' />
        <Form.Label className='new-product-curr-label'>$</Form.Label>
        </Form.Group>
    </div>
    
    <Form.Group className='col'  controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control
    value={updatedProd.description}
    onChange={(e)=> {
      setUpdatedProd({...updatedProd,description:e.target.value})
      }}
    as="textarea" rows={3} />
  </Form.Group>
  </Form.Group>

<Form.Group className='d-flex mt-3'>
      <Button 
      onClick={()=>{ updateProduct(updatedProd,`${process.env.REACT_APP_BE_URL}/${updatedProd.product_id}`)
      
        dispatch(getSingleProductActionWithThunk(updatedProd.product_id))
        
      
      }}
      variant='success'>
       Save
      </Button>
</Form.Group>

  </Form>
  )
}

export default EditProductForm