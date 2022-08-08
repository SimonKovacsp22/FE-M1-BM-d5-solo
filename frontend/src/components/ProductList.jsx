import {useState,useEffect} from 'react'
import Product from './Product'
import {Row,Col,} from 'react-bootstrap'
import { getProducts } from '../utilities/api-functions'
import { Pagination } from 'react-bootstrap'


export const getURL = process.env.REACT_APP_BE_URL








function ProductList() {

  const [products,setProducts] = useState([])
  const [total,setTotal] = useState(0)
  const [skip,setSkip] = useState(0)

  useEffect(()=>{
    getProducts(`https://bem-products-july22.herokuapp.com/products/?limit=5&skip=${skip}`).then( (productsData)=> {setProducts (productsData.products)
  setTotal(productsData.totalPages)} )
      },[skip])

      let active = 1;
      let items = [];

      for (let number = 1; number <= total; number++) {
        items.push(
          <Pagination.Item onClick={()=>setSkip((number-1)*total)} key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }

      
     
   

  return (
    <>
    <Row>
       {products?.map((product) => (
        <Col key={product._id}
          md={4}
          style={{
            marginBottom: "50px",
          }}
        >
          <Product  {...product} />
        </Col>
      ))}
    </Row>
    <Pagination>{items}</Pagination>
    </>


   

    
  )
}

export default ProductList