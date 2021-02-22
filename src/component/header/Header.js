import React from "react";
import CollectionSort from "./collection-sort/CollectionSort";

const Header = ({ onChange, products, categories }) => {
  console.log("dad - Children.Header");

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
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
      </div>
    </nav>
  );
};
export default Header;
