import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, CardMedia, CardContent, Grid, Typography, makeStyles} from '@material-ui/core';
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({

}));

function CocktailPage(props) {
  const classes = useStyles(props);
  const [cocktail, setCocktail] = useState({})
  const url = "/api/v1/cocktail";
  const { id } = useParams();

  useEffect(() => {
    function fetchCocktail() {
      axios.get(url, {
        params: { id }
      }).then(res => {
        setCocktail(res.data)
      })
    }
    fetchCocktail();
  }, [])

  

  return (
    <Container>
      <Card m={4} className={classes.root}>
        <CardMedia
          image={cocktail.strDrinkThumb}
          title={cocktail.strDrink}
          height="300"
          component="img"
          alt={cocktail.strDrink}
        />
        <CardContent>
          <Typography variant="h3">{cocktail.strDrink}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5">Ingredients</Typography>
              {cocktail && cocktail.measured_ingredients ? cocktail.measured_ingredients.map( (measured_ingredient, index) => {
                return (
                <Typography variant="body1" key={index}>{measured_ingredient}</Typography>
                )
              }) : 
              <Typography>Loading...</Typography>
              }
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5">Instructions</Typography>
              <Typography variant="body1">{cocktail.strInstructions}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CocktailPage;