import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360
  }
}));

function Cocktail(props) {
  const classes = useStyles(props);
  let link = "/cocktail/" + props.cocktail.idDrink
  return (
    <Card className={classes.root}>
      <Link to={link}>
        <CardMedia
          image={props.cocktail.strDrinkThumb}
          title={props.cocktail.strDrink}
          height="140"
          component="img"
          alt={props.cocktail.strDrink}
        />
      </Link>
      <CardContent>
        <Typography>{props.cocktail.strDrink}</Typography>
      </CardContent>
    </Card>
  );
}

export default Cocktail;