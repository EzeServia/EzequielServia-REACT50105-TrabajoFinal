import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/navbarComponents/NavbarComponent";
import Category from "../pages/Category";
import Item from "../pages/ItemDetailContainer";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
