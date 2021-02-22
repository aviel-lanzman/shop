import React, { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Product from "../../component/prodouct/Product";
import "../../App.css";

const Home = () => {
  const [status, setStatus] = useState(true);
  const [products, setProducts] = useState([]);
  const [saleSrc, setSaleSrc] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const src = "https://fakestoreapi.com/products";
    console.log(12);

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

  const changeValue = (category) => {
    setCategory(category);
  };
  const timeOut = (bool) => {
    setStatus({ status: bool });
  };
  const Filter = products.filter(
    (c) => c.category === category || category === "all"
  );
  console.log(Filter);
  console.log(products);
  console.log(status);
  return (
    <>
      <Header
        key={0}
        saleSrc={saleSrc}
        products={products}
        status={status}
        onChange={changeValue}
      />
      <Product
        key={1}
        category={category}
        saleSrc={saleSrc}
        Filter={Filter}
        status={status}
        timeOut={timeOut}
      />
    </>
  );
};
export default Home;
