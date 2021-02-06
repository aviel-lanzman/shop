import React from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import Section from "./Section/Section";

class Prodouct extends React.Component {
  state={
    felter:"all"
  }
  render() {
    const { state } = this.props;
    const { timeOut } = this.props;
    const { prodoucts } = this.props.state;
    return [
      <SaleCountDown key={0} state={state} timeOut={timeOut} />,
      <section key={1} className="products">
        {prodoucts.map((prodouct) => (
          <Section key={prodouct.id} state={state} prodouct={prodouct} />
        )).felter((this.)=>{})}
      </section>,
    ];
  }
}
export default Prodouct;
