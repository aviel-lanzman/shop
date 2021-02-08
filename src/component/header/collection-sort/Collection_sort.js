import React from "react";

class CollectionSort extends React.Component {
  render() {
    console.log(
      "dad - Children.Header -Children.Section - Children.CollectionSort"
    );

    const { categories } = this.props;
    // console.log(this.props);
    return (
      <>
        <select
          onChange={(e) => {
            this.props.onChange(e.target.value);
          }}
        >
          <option value={"all"} key={0}>
            {"all"}
          </option>
          {categories.map((select) => (
            <option value={`${select}`} key={select.id}>
              {select}
            </option>
          ))}
        </select>
      </>
    );
  }
}
export default CollectionSort;
