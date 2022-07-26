import {Container} from 'react-bootstrap'
import ProductList from './components/ProductList';
import { Routes,Route } from "react-router-dom";
import NewProduct from './components/NewProduct';
import Review from './components/Review';
import ProductDetail from './components/ProductDetail';

import NavbarTop from './components/Navbar';

function App() {
  return (
    <Container>
      <NavbarTop/>

      <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/:product_id" element={<ProductDetail />} />
      <Route path="/newProduct" element={<NewProduct/>}/>
      <Route path="/reviews/:review_id" element={<Review />} />
    </Routes>
    </Container>
  );
}

export default App;
