import {useState,useEffect} from 'react'
import Product from './Product'
import {Row,Col,} from 'react-bootstrap'
import { getProducts } from '../utilities/api-functions'


export const getURL = process.env.REACT_APP_BE_URL



function ProductList() {

    const [products,setProducts] = useState([])

    

    useEffect(()=>{
  getProducts(getURL).then( (productsData)=> setProducts (productsData) )
    },[])

  return (
    <Row>
       {products.map((product) => (
        <Col key={product.product_id}
          md={4}
          style={{
            marginBottom: "50px",
          }}
        >
          <Product  {...product} />
        </Col>
      ))}
    </Row>

   

    
  )
}

export default ProductList