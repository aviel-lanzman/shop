import React, { useEffect, useState } from "react";
import "./ThisProduct.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const ThisProduct = ({ match }) => {
  const [productID, setProductID] = useState([]);
  console.log(match.params.productId);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productId}`)
      .then((thisProduct) => thisProduct.json())
      .then((productID) => {
        console.log(productID);
        return setProductID(() => productID);
      });
  }, []);
  const { image, id, title, price, description, category } = productID;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  category: {category}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  ADD TO BUG
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" display="block">
                ${price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ThisProduct;

// return (
//   <div className="thisProduct">
//     <h3 className="title">{title}</h3>
//     <img src={image} />
//     <h5 className="price">${price}</h5>
//     <h6 className="description">{description}</h6>
//   </div>
// );
