import React from "react";

class Section extends React.Component {
  render() {
    console.log(this.props.state.statos);

    let { category, image, title, price } = this.props.prodouct;
    const saleStyle = {
      borderStyle: "solid",
      borderWidth: "10px",
      borderColor: "red",
    };
    console.log(this.props);
    return (
      <div
        className="product-card"
        // key={id}
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

export default Section;
