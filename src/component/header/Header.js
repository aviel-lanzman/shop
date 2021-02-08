import React from "react";
import CollectionSort from "./collection-sort/Collection_sort";
// import App from "./src/App";
// const select1 = [
//   [{ id: 0, title: "Filter by:" }],
//   [
//     { id: 1, title: 2016 },
//     { id: 2, title: "jacket" },
//     { id: 3, title: "Jackets" },
//     { id: 4, title: "layers" },
//     { id: 5, title: "Obermeyer" },
//     { id: 6, title: "Roxy" },
//     { id: 7, title: "womens" },
//   ],
// ];
// const select2 = [
//   [{ id: 0, title: "Sort by:" }],
//   [
//     { id: 1, title: "Featured" },
//     { id: 2, title: "Best" },
//     { id: 3, title: "Selling" },
//     { id: 4, title: "Alphabetically, A-Z" },
//     { id: 5, title: "Alphabetically, Z-A" },
//     { id: 6, title: "Price, low to high" },
//     { id: 6, title: "Price, high to low" },
//     { id: 6, title: "Date, new to old" },
//     { id: 7, title: "Date, old to new" },
//   ],
// ];
// onChange={this.changeValue}
class Header extends React.Component {
  render() {
    console.log("dad - Children.Header");

    // console.log(this.props);
    const { onChange } = this.props;
    const groupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});
    const { prodoucts } = this.props.state;
    const categories = Object.keys(groupBy(prodoucts, "category"));
    // console.log(categories);
    return (
      <nav className="product-filter">
        <h1>Jackets</h1>
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <CollectionSort categories={categories} onChange={onChange} />
          </div>
          {/* <div className="collection-sort">
            <label>Sort by:</label>
            <CollectionSort
              categories={categories}
              onChange={onChange}
            />
          </div> */}
        </div>
      </nav>
    );
  }
}
export default Header;
