import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360
  }
}));

function CocktailCard(props) {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <CardMedia
        image={props.classes.cocktail.strDrinkThumb}
        title={props.classes.cocktail.strDrink}
        height="140"
        component="img"
        alt={props.classes.cocktail.strDrink}
      />
      <CardContent>
        <Typography>{props.classes.cocktail.strDrink}</Typography>
      </CardContent>
    </Card>
  );
}

class Cocktail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cocktail } = this.props;
    return (
      <CocktailCard classes={{ cocktail }} />
    )
  }

}
export default Cocktail;