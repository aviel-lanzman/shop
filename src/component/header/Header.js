import React from "react";
import CollectionSort from "./collection-sort/Collection_sort";
// import App from "./src/App";
const select1 = [
  [{ id: 0, title: "Filter by:" }],
  [
    { id: 1, title: 2016 },
    { id: 2, title: "jacket" },
    { id: 3, title: "Jackets" },
    { id: 4, title: "layers" },
    { id: 5, title: "Obermeyer" },
    { id: 6, title: "Roxy" },
    { id: 7, title: "womens" },
  ],
];
const select2 = [
  [{ id: 0, title: "Sort by:" }],
  [
    { id: 1, title: "Featured" },
    { id: 2, title: "Best" },
    { id: 3, title: "Selling" },
    { id: 4, title: "Alphabetically, A-Z" },
    { id: 5, title: "Alphabetically, Z-A" },
    { id: 6, title: "Price, low to high" },
    { id: 6, title: "Price, high to low" },
    { id: 6, title: "Date, new to old" },
    { id: 7, title: "Date, old to new" },
  ],
];
// onChange={this.changeValue}
class Header extends React.Component {
  render() {
    const { state, onChange } = this.props;

    return (
      <nav className="product-filter">
        <h1>Jackets</h1>
        <div className="sort">
          <CollectionSort key={2} select={select1} />
          <CollectionSort key={3} select={select2} />
        </div>
      </nav>
    );
  }
}
export default Header;
