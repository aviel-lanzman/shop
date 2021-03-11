import React from "react";
import RangeSlider from "../Slider";
import CollectionSort from "./collection-sort/CollectionSort";

const Header = ({ onChange, products, categories, slider }) => {
  console.log("dad - Children.Header");
  return (
    <nav
      className="product-filter"
      style={{ position: "fixed", height: "100%", width: "max-content" }}
    >
      <div
        className="sort"
        style={{ display: "block", alignSelf: "baseline", textAlign: "center" }}
      >
        <div className="collection-sort" style={{ display: "inline-flex" }}>
          <label>Filter by:</label>
          <CollectionSort
            onChange={onChange}
            categories={categories}
            products={products}
          />
        </div>
        {/* <div className="collection-sort">
         <label>Sort by:</label>
         <CollectionSort
           categories={categories}
           onChange={onChange}
         />
        </div> */}
        <RangeSlider slider={slider} />
      </div>
    </nav>
  );
};
export default Header;
