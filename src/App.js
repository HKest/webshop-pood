import { Link, Route, Routes } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddProducts from "./pages/admin/AddProducts";
import AdminHome from "./pages/admin/AdminHome";
import EditProducts from "./pages/admin/EditProducts";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import "./App.css";
import Cart from "./pages/global/Cart";
import ContactUs from "./pages/global/ContactUs";
import Shops from "./pages/global/Shops";
import SingleProducts from "./pages/global/SingleProduct";
import HomePage from "./pages/global/HomePage";

function App() {
  const { t, i18n } = useTranslation();

  const updateLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Webshop
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">
                {t("admin")}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                {t("contact")}
              </Nav.Link>
              <Nav.Link as={Link} to="/shops">
                {t("shops")}
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                {t("cart")}
              </Nav.Link>
            </Nav>
            <img
              className="lang"
              src="/english.png"
              alt=""
              onClick={() => updateLanguage("en")}
            />
            {/* <button onClick={() => updateLanguage("en")}>EN</button> */}
            <img
              className="lang"
              src="/estonian.png"
              alt=""
              onClick={() => updateLanguage("ee")}
            />

            <img
              className="lang"
              src="/russian.png"
              alt=""
              onClick={() => updateLanguage("ru")}
            />

            <img
              className="lang"
              src="/german.png"
              alt=""
              onClick={() => updateLanguage("de")}
            />

            {/* <button onClick={() => updateLanguage("ee")}>EE</button> */}
          </Container>
        </Navbar>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="shops" element={<Shops />} />
          <Route path="product/:id" element={<SingleProducts />} />
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/AdminHome" element={<AddProducts />} />
          <Route path="admin/edit-products/:id" element={<EditProducts />} />
          <Route
            path="admin/maintain-products"
            element={<MaintainProducts />}
          />
          <Route
            path="admin/maintain-categories"
            element={<MaintainCategories />}
          />
          <Route path="admin/maintain-shops" element={<MaintainShops />} />

          <Route path="admin/add-products" element={<AddProducts />} />
        </Routes>
        <br />
      </div>
    </div>
  );
}

export default App;
