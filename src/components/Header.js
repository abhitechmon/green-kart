import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop:"100px"
  },
  header: {
    width: "100%",
    height: "250px",
    backgroundImage: "url(./assets/veg.jpg)",
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
  },
}));

export default function TypographyTheme() {
  const classes = useStyles();

  return (
    <div className={classes.header} >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <div className={classes.root}>
          {"Fresh Organic Products at your Door step."}
        </div>
      </Grid>
    </div>
  );
}
