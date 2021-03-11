import "./App.css";
import React, { Provider, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleProducts from "./component/prodouct/Section/Section";
import Product from "./component/prodouct/Product";
import ThisProduct from "./component/prodouct/ThisProduct";
import ThemeContext, { themes } from "./component/colors";

const App = () => {
  console.log("dad");
  const context = useContext(ThemeContext);
  // console.log(context);
  // const [color, setColor] = useState(context);
  // console.log(color);
  // const changeColors = () => {
  //   if (color === themes.light) {
  //     console.log(themes.dark);
  //     setColor(themes.dark);
  //   } else {
  //     console.log(themes.light);
  //     setColor(themes.light);
  //   }
  // };

  return (
    <ThemeContext.Provider value={themes}>
      <Router>
        <div>
          {" "}
          <nav
            className="header"
            style={
              {
                // width: "auto",
                // background: color.background,
                // color: color.foreground,
              }
            }
          >
            {/* <button onClick={() => changeColors()}>
              change colors
            </button> */}
            <Link
              to="/login"
              style={{
                width: "auto",
              }}
            >
              login
            </Link>
            <h1>Here you buy everything</h1>
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
    </ThemeContext.Provider>
  );
};
export default App;
