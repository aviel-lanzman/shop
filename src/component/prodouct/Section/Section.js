import React from "react";

const SingleProducts = ({ prodouct, saleSrc, status }) => {
  console.log("dad - Children.Prodouct -Children.Section");
  const { category, image, title, price } = prodouct;

  const saleStyle = {
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "red",
  };

  const sale = () => {
    let bool = false;
    saleSrc.forEach((src) => {
      bool += src.image === image;
    });
    if (bool > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      key={prodouct.id}
      className="product-card"
      style={status && sale() ? saleStyle : null}
      category={category}
    >
      <div className="product-image">
        <img src={image} alt="productImage"></img>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
    </div>
  );
};

export default SingleProducts;
