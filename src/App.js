import "./App.css";
import React from "react";
import Header from "./component/header/Header";
import Product from "./component/prodouct/Product";

class App extends React.Component {
  state = {
    statos: true,
    prodoucts: [],
    saleSrc: "",
    value: "",
  };

  src = "https://fakestoreapi.com/products";
  componentDidMount() {
    fetch(this.src)
      .then((prodoucts) => prodoucts.json())
      .then((prodoucts) =>
        this.setState({
          prodoucts,
          saleSrc: prodoucts[12].image,
        })
      );
  }
  changeValue = (value) => {
    this.setState({ value });
  };
  timeOut = (bool) => {
    this.setState({ statos: bool });
  };
  render() {
    return (
      <>
        <Header key={0} state={this.state} onChange={this.changeValue} />
        <Product key={1} state={this.state} timeOut={this.timeOut} />,
      </>
    );
  }
}
export default App;
