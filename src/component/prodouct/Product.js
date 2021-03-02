import React, { useContext, useEffect, useState } from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import SingleProducts from "./Section/Section";
import { Link } from "react-router-dom";
import "./Product.css";
import ThemeContext from "../colors";
const Product = ({ Filter, category, timeOut, saleSrc, status, match }) => {
  console.log("dad - Children.Product");
  const context = useContext(ThemeContext);
  // console.log(context);
  const [color, setColor] = useState(context);
  const changeColors = () => {
    if (color === context.light) {
      console.log(context.dark);
      setColor(context.dark);
    } else {
      console.log(context.light);
      setColor(context.light);
    }
  };
  const productsList = Filter.map((product) => (
    <SingleProducts
      saleSrc={saleSrc}
      product={product}
      status={status}
      color={color}
    />
  ));

  return (
    <>
      {/* <SaleCountDown
        key={0}
        saleSrc={saleSrc}
        timeOut={timeOut}
        status={status}
      /> */}
      <button onClick={() => changeColors()}>change colors</button>
      <section className="products">{productsList}</section>
    </>
  );
};
export default Product;
