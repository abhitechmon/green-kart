import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

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

  const [search, setSearch] = React.useState("");
  console.log(items);

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.checked });
  };

  const handleSearch = (val) => {
    setSearch(val);
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
        <Input
          id="standard-adornment-qty"
          value={search}
          onChange={(val) => handleSearch(val.target.value)}
          endAdornment={<InputAdornment position="end">Search</InputAdornment>}
          aria-describedby="standard-qty-helper-text"
          inputProps={{
            "aria-label": "qty",
          }}
        />
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {items.data
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            } else return null;
          })
          .filter((item) => (category.Fruits && item.category === "Fruits") || (category.Vegetables && item.category === "Vegetables"))
          .map((item) => (
            <ItemCard item={item} className={classes.card} />
          ))}
      </Grid>
    </div>
  );
}
