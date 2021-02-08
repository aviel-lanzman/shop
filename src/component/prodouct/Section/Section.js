import React from "react";

class SingleProducts extends React.Component {
  render() {
    console.log("dad - Children.Prodouct -Children.Section");

    const { category, image, title, price } = this.props.prodouct;
    const saleStyle = {
      borderStyle: "solid",
      borderWidth: "10px",
      borderColor: "red",
    };
    return (
      <div
        className="product-card"
        style={
          this.props.state.statos && this.props.state.saleSrc === image
            ? saleStyle
            : null
        }
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
  }
}

export default SingleProducts;
