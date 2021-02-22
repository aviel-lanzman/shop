import React, { useEffect, useState } from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import SingleProducts from "./Section/Section";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ Filter, category, timeOut, saleSrc, status, match }) => {
  console.log("dad - Children.Product");

  const productsList = Filter.map((product) => (
    <Link
      key={product.id}
      to={`shop/product/${product.id}`}
      className="this-product"
    >
      <SingleProducts saleSrc={saleSrc} product={product} status={status} />
    </Link>
  ));

  return (
    <>
      <SaleCountDown
        key={0}
        saleSrc={saleSrc}
        timeOut={timeOut}
        status={status}
      />

      <section className="products">{productsList}</section>
    </>
  );
};
export default Product;
