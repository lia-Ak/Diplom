import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CategoriesPege from "./Pages/CategoriesPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductModal from "./Pages/ProductModalPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPege />} />
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/allProducts" element={<ProductModal />} />
        <Route path="/allSales" element={<ProductModal />} />
        <Route path="/categories/:id" element={<ProductModal />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
