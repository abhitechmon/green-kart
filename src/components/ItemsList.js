import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const items = useSelector((state) => state.itemsReducer);
  const [category, setCategory] = React.useState({
    Fruits: true,
    Vegetables: true,
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.checked });
  };

  console.log(category);
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        component="div"
        style={{ paddingLeft: "90px" }}
      >
        Fruits
        <Switch
          checked={category.Fruits}
          onChange={handleChange}
          name="Fruits"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        Vegetables
        <Switch
          checked={category.Vegetables}
          onChange={handleChange}
          color="primary"
          name="Vegetables"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {items.data
          .filter((item) => category.Fruits && item.category === "Fruits")
          .map((item) => (
            <ItemCard item={item} className={classes.card} />
          ))}
        {items.data
          .filter((item) => category.Vegetables && item.category === "Vegetables")
          .map((item) => (
            <ItemCard item={item} className={classes.card} />
          ))}
      </Grid>
    </div>
  );
}
