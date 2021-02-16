import React from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import SingleProducts from "./Section/Section";

const Prodouct = ({ prodoucts, category, timeOut, saleSrc, status }) => {
  console.log("dad - Children.Prodouct");
  return (
    <>
      <SaleCountDown
        key={0}
        saleSrc={saleSrc}
        timeOut={timeOut}
        status={status}
      />

      <section className="products">
        {prodoucts
          .filter((c) => c.category === category || category === "all")
          .map((prodouct) => (
            <SingleProducts
              key={prodouct.id}
              saleSrc={saleSrc}
              prodouct={prodouct}
              status={status}
            />
          ))}
      </section>
    </>
  );
};
export default Prodouct;
