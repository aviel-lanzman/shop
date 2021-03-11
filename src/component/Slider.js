import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

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

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ slider }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  console.log(slider());
  slider(value);
  return (
    <div
      className={classes.root}
      style={{ display: "inline-grid", width: "max-content" }}
    >
      <Typography id="range-slider" gutterBottom>
        price range
      </Typography>
      <Slider
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
