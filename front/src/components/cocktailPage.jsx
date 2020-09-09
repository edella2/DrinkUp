import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360
  }
}));

function CocktailPageCom(props) {
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

class CocktailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      cocktail: {},
    } 
  }

  componentDidMount() {
    const url = "http://localhost:3000/api/v1/cocktail";
    const { id } = useParams();
    let cocktail;
    axios.get(url, {
      params: { id }
    })
    .then(response => {
      // handle success
      cocktail = response.data.drinks;
      this.setState({cocktail})
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
    });
  }

  render() {
    let { cocktail } = this.state;
    return (
      <CocktailPageCom classes={{ cocktail }} />
    )
  }

}
export default CocktailPage;