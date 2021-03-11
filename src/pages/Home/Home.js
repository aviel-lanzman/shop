import React, { useContext, useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Product from "../../component/prodouct/Product";
import "../../App.css";
import ThemeContext from "../../component/colors";
import RangeSlider from "../../component/Slider";

const Home = (props) => {
  const [status, setStatus] = useState(true);
  const [products, setProducts] = useState([]);
  const [saleSrc, setSaleSrc] = useState([]);
  const [category, setCategory] = useState("all");
  // const [Filter, setFilter] = useState([]);
  const [slider, setSlider] = useState([0, 2000]);
  useEffect(() => {
    const src = "https://fakestoreapi.com/products";

    fetch(src)
      .then((products) => products.json())
      .then((products) => {
        console.log(products);
        return (
          setProducts(() => products), setSaleSrc([products[12], products[2]])
        );
      });
    console.log(products);
  }, []);
  console.log(saleSrc);
  const changeValue = (category) => {
    setCategory(category);
  };
  const timeOut = (bool) => {
    setStatus({ status: bool });
  };
  const Filter = products
    .filter((price) => slider[0] < price.price && slider[1] > price.price)
    .filter((c) => c.category === category || category === "all");

  return (
    <>
      <div dir="rtl">
        <Header
          key={0}
          saleSrc={saleSrc}
          products={products}
          status={status}
          onChange={changeValue}
          slider={setSlider}
        />
        <Product
          key={1}
          category={category}
          saleSrc={saleSrc}
          Filter={Filter}
          status={status}
          timeOut={timeOut}
        />
      </div>
    </>
  );
};
export default Home;
