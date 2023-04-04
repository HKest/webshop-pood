import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddProducts from "./admin/AddProducts";
import AdminHome from "./admin/AdminHome";
import EditProduct from "./admin/EditProduct";
import MaintainCategories from "./admin/MaintainCategories";
import MaintainProducts from "./admin/MaintainProducts";
import MaintainShops from "./admin/MaintainShops";
import "./App.css";
import Cart from "./pages/admin/global/Cart";
import ContactUs from "./pages/admin/global/ContactUs";
import Shops from "./pages/admin/global/Shops";
import SingleProducts from "./pages/admin/global/SingleProduct";
import HomePage from "./pages/admin/global/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="product" element={<SingleProducts />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProducts />} />
        <Route path="admin/edit-products" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route
          path="admin/maintain-categories"
          element={<MaintainCategories />}
        />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
      </Routes>
      <br />
    </div>
  );
}

export default App;
