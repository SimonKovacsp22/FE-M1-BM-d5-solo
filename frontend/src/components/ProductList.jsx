import {useState,useEffect} from 'react'
import Product from './Product'
import {Row,Col,} from 'react-bootstrap'


export const getURL = "http://localhost:3002/products"

export const getProducts = async (endPoint) =>{
  try{
  const response = await fetch(endPoint)
  const data =await response.json()
  
  return data

  } catch (error) {
    console.log(error)
  }
   
}

function ProductList() {

    const [products,setProducts] = useState([])

    useEffect(()=>{
  getProducts(getURL).then( (productsData)=> setProducts (productsData) )
    },[])

  return (
    <Row>
       {/* {products.map((product) => (
        <Col key={product.product_id}
          md={4}
          style={{
            marginBottom: "50px",
          }}
        >
          <Product  {...product} />
        </Col>
      ))} */}
    </Row>

   

    
  )
}

export default ProductList