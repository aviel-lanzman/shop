import React, { useContext, useEffect, useState } from "react";
import SaleCountDown from "./SeleCountDown/SaleCountDown";
import SingleProducts from "./Section/Section";
import { Link } from "react-router-dom";
import "./Product.css";
import ThemeContext from "../colors";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Product = ({ Filter, category, timeOut, saleSrc, status, match }) => {
  console.log("dad - Children.Product");
  const context = useContext(ThemeContext);
  // console.log(context);
  const [color, setColor] = useState(context);
  const changeColors = () => {
    if (color === context.light) {
      console.log(context.dark);
      setColor(context.dark);
    } else {
      console.log(context.light);
      setColor(context.light);
    }
  };

  const CenteredGrid = () => {
    const classes = useStyles();

    const productsList = Filter.map((product) => (
      <SingleProducts
        saleSrc={saleSrc}
        product={product}
        status={status}
        color={color}
        classes={classes}
      />
    ));
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {productsList}
        </Grid>
      </div>
    );
  };
  // const productsList = Filter.map((product) => (
  //   <Grid item xs={4}>
  //         <Paper className={classes.paper}><SingleProducts
  //     saleSrc={saleSrc}
  //     product={product}
  //     status={status}
  //     color={color}
  //   /></Paper>
  //       </Grid>
  // ));

  return (
    <>
      {/* <SaleCountDown
        key={0}
        saleSrc={saleSrc}
        timeOut={timeOut}
        status={status}
      /> */}
      {/* <div style={{ padding: "25%" }}>
        
      </div> */}
      <button onClick={() => changeColors()}>change colors</button>
      <section className="products" style={{ margin: "0% 23% 0% 4%" }}>
        <CenteredGrid />
      </section>
    </>
  );
};
export default Product;
