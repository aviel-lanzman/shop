import React from "react";

class CollectionSort extends React.Component {
  state = { value: "" };
  render() {
    // const groupBy = (xs, key) =>
    //   xs.reduce((rv, x) => {
    //     rv[x[key]] = true || [];
    //     return rv;
    //   }, {});
    // const products = [];
    // const categories = Object.keys(groupBy(products, "category"));

    const { select } = this.props;

    const selects = select[1].map((s) => (
      <option value={`${s.title}`} key={s.id}>
        {/* onChange={} */}
        {s.title}
      </option>
    ));
    return (
      <div className="collection-sort">
        <label>{select[0][0].title}</label>
        <select
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        >
          {" "}
          {selects}
        </select>
      </div>
    );
  }
}
export default CollectionSort;
