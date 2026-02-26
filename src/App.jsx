import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import OurMembers from "./components/Footer/OurMembers";
import ScrollToTop from "./components/ScrollToTop";
import { getProductById } from "./data/products";

import { Route, Routes, useParams } from "react-router-dom";

// Wrapper component to get product from URL params
function ProductWrapper() {
  const { productName } = useParams();
  const product = getProductById(productName);
  return <ProductPage product={product} />;
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />
        <Route
          path="/:productName"
          element={
            <>
              <Header />
              <ProductWrapper />
              <Footer />
            </>
          }
        />
        <Route
          path="/ourMembers"
          element={
            <>
              <Header />
              <OurMembers />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
