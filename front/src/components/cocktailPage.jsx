import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({

}));

function CocktailPage(props) {
  const classes = useStyles(props);
  const [cocktail, setCocktail] = useState({})
  const url = "/api/v1/cocktail";
  const { id } = useParams();

  useEffect(() => {
    let res = axios.get(url, {
      params: { id: id }
    }).then(res => {
      setCocktail(res.data.drinks[0])
    })

  }, [])

  

  return (
    <Container>
      <Card m={2} className={classes.root}>
        <CardMedia
          image={cocktail.strDrinkThumb}
          title={cocktail.strDrink}
          height="400"
          component="img"
          alt={cocktail.strDrink}
        />
        <CardContent>
          <Typography>{cocktail.strDrink}</Typography>
          <Typography>{cocktail.strDrink}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CocktailPage;