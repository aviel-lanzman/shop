import React, { useContext } from "react";
import Home from "../pages/Home/Home";

const AllFilter = ({ products, slider, category, setFilter }) => {
  console.log();

  const listProductsPrice = products
    .map((product) => product.price)
    .filter((price) => slider[0] < price && slider[1] > price);

  const Filter = products.filter(
    (c) => c.category === category || category === "all"
  );
  console.log(Filter);
  console.log(listProductsPrice);
  setFilter(Filter);
  return;
};
export default AllFilter;
