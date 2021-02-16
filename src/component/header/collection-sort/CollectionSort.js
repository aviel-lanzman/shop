import React from "react";

const CollectionSort = ({ onChange, prodoucts }) => {
  console.log(
    "dad - Children.Header -Children.Section - Children.CollectionSort"
  );

  console.log(prodoucts);
  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});
  let categories = Object.keys(groupBy(prodoucts, "category"));

  return (
    <>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value={"all"} key={0}>
          {"all"}
        </option>
        {categories.map((select) => (
          <option value={`${select}`} key={categories.indexOf(select)}>
            {select}
          </option>
        ))}
      </select>
    </>
  );
};
export default CollectionSort;