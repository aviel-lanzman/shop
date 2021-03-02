import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProducts.css";
import ThemeContext from "../../colors";
import { Link } from "react-router-dom";

const saleStyle = {
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: "red",
};

const SingleProducts = ({
  product: { id, category, image, title, price },
  saleSrc,
  status,
  match,
  color,
}) => {
  console.log("dad - Children.Product -Children.Section");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useParams();
  const sale = () => {
    let bool = false;
    saleSrc.forEach((src) => {
      bool += src.image === image;
    });
    if (bool > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div
        key={id}
        className="product-card"
        style={status && sale() ? saleStyle : null}
        category={category}
      >
        <div className="product-image">
          <Link key={id} to={`shop/product/${id}`} className="this-product">
            <img src={image} alt="productImage" />
          </Link>
        </div>
        <div
          className="product-info"
          style={{
            background: color.background,
            color: color.foreground,
          }}
        >
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;

//   return (
//     <div
//       key={product.id}
//       className="product-card"
//       style={status && sale() ? saleStyle : null}
//       category={category}
//     >
//       <div className="product-image"><Link
//   key={product.id}
//   to={`shop/product/${product.id}`}
//   className="this-product"
// >
//         <img src={image} alt="productImage"></img></Link>
//       </div>
//       <div className="product-info">
//         <h5>{title}</h5>
//         <h6>${price}</h6>
//       </div>
//     </div>
//   );

// {/* <div
//       style={{
//         background: color.background,
//         color: color.foreground,
//       }}
//     >
//       <Card
//         className={classes.root}
//         style={status && sale() ? saleStyle : null}
//       >
//         <CardHeader title={title} />
//         <CardMedia
//           className={classes.media}
//           image={image}
//           title="Paella dish"
//           background-size="contain"
//         ></CardMedia>
//         <CardContent>
//           <Typography
//             variant="body2"
//             color="textSecondary"
//             component="p"
//           ></Typography>
//         </CardContent>
//         category: {category}
//         <CardActions disableSpacing>
//           {/* <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton> */}
//     </CardActions>
//     <Collapse in={expanded} timeout="auto" unmountOnExit>
//       <CardContent>
//         <Typography paragraph>Method:</Typography>
//         <Typography paragraph>
//           Heat 1/2 cup of the broth in a pot until simmering, add saffron
//           and set aside for 10 minutes.
//         </Typography>
//         <Typography paragraph>
//           Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//           over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//           stirring occasionally until lightly browned, 6 to 8 minutes.
//           Transfer shrimp to a large plate and set aside, leaving chicken
//           and chorizo in the pan. Add pimentón, bay leaves, garlic,
//           tomatoes, onion, salt and pepper, and cook, stirring often until
//           thickened and fragrant, about 10 minutes. Add saffron broth and
//           remaining 4 1/2 cups chicken broth; bring to a boil.
//         </Typography>
//         <Typography paragraph>
//           Add rice and stir very gently to distribute. Top with artichokes
//           and peppers, and cook without stirring, until most of the liquid
//           is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
//           reserved shrimp and mussels, tucking them down into the rice, and
//           cook again without stirring, until mussels have opened and rice is
//           just tender, 5 to 7 minutes more. (Discard any mussels that don’t
//           open.)
//         </Typography>
//         <Typography>
//           Set aside off of the heat to let rest for 10 minutes, and then
//           serve.
//         </Typography>
//       </CardContent>
//     </Collapse>
//     <button onClick={() => changeColors()} margin="2%">
//       change colors
//     </button>
//   </Card>
// </div> */}
