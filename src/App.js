import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import Header from "./component/header/Header";
import Product from "./component/prodouct/Product";

const App = () => {
  const [status, setStatus] = useState(true);
  const [prodoucts, setProdoucts] = useState([]);
  const [saleSrc, setSaleSrc] = useState([]);
  const [category, setCategory] = useState("all");

  const src = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(src)
      .then((prodoucts) => prodoucts.json())
      .then((prodoucts) => {
        console.log(prodoucts);
        return (
          setProdoucts(() => prodoucts),
          setSaleSrc([prodoucts[12], prodoucts[2]])
        );
      });
    console.log(prodoucts);
  }, []);

  const changeValue = (category) => {
    setCategory(category);
  };
  const timeOut = (bool) => {
    setStatus({ status: bool });
  };

  console.log("dad");
  console.log(saleSrc);
  return (
    <>
      <Header
        key={0}
        saleSrc={saleSrc}
        prodoucts={prodoucts}
        status={status}
        onChange={changeValue}
      />
      <Product
        key={1}
        category={category}
        saleSrc={saleSrc}
        prodoucts={prodoucts}
        status={status}
        timeOut={timeOut}
      />
    </>
  );
};
export default App;
