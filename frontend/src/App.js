import {Container} from 'react-bootstrap'
import ProductList from './components/ProductList';
import { Routes,Route } from "react-router-dom";
import Product from './components/Product';
import Review from './components/Review';
import NewProduct from './components/NewProduct';
import NavbarTop from './components/Navbar';

function App() {
  return (
    <Container>
      <NavbarTop/>

      <Routes>
      <Route path="/" element={<ProductList/>} />
      {/* <Route path="/:product_id" element={<Product />} /> */}
      <Route path="/newProduct" element={<NewProduct/>}/>
      <Route path="/reviews/:review_id" element={<Review />} />
    </Routes>
    </Container>
  );
}

export default App;
