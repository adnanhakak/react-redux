import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Description from "./components/Description";
import Dropdown from "./components/Dropdown";
import ProductPage from "./components/ProductPage";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const onChangeCategory = (id) => {
    let newList = allProducts.filter((item) => {
      return item.categoryId === id;
    });

    setProducts(newList);
  };

  useEffect(() => {
    const getProducts = async () => {
      let res = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/products"
      );
      setAllProducts(res.data);
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Dropdown onSubmit={onChangeCategory} />
      <Routes>
        <Route exact path="/" element={<ProductPage products={products} />} />
        <Route path="/:id" element={<Description products={products} />} />
      </Routes>
    </div>
  );
}
export default App;
