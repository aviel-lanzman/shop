import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleProducts from "./component/prodouct/Section/Section";
import Product from "./component/prodouct/Product";
import ThisProduct from "./component/prodouct/ThisProduct";

const App = () => {
  console.log("dad");
  // console.log(saleSrc);
  return (
    <>
      <Router>
        <div>
          <nav className="header">
            <Link to="/login">login</Link>
            <ul className="nav-links">
              <li>
                <Link to="/">בית</Link>
              </li>
              <li>
                <Link to="/about">אודות</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/shop/product/:productId"
              component={ThisProduct}
            ></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
