import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: '20px',
  },
  media: {
    height: 140,
  },
});

export default function ItemCard(props) {
  const classes = useStyles();
  const {item}=props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/assets/${item.name}.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Seller: {item.vendor}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type: {item.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {item.available?
        <Button size="small" variant="outlined" color="primary">
          In-stock
        </Button>
        :
        <Button size="small" variant="outlined" color="secondary">
          Out of stock
        </Button>
      }
        <Button size="small" variant="contained" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
