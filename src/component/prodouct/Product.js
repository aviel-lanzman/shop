import React from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import SingleProducts from "./Section/Section";

class Prodouct extends React.Component {
  render() {
    console.log("dad - Children.Prodouct");
    const { state, timeOut } = this.props;
    const { prodoucts, category } = state;
    return (
      <>
        <SaleCountDown key={0} state={state} timeOut={timeOut} />,
        <section className="products">
          {prodoucts
            .filter((c) => c.category === category || category === "all")
            .map((prodouct) => (
              <SingleProducts
                key={prodouct.id}
                state={state}
                prodouct={prodouct}
              />
            ))}
        </section>
        ,
      </>
    );
  }
}
export default Prodouct;
