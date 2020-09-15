import React, { useState, useEffect } from 'react';
import Cocktail from './cocktail';
import axios from "axios";
import { Container, Grid } from '@material-ui/core';



function PopularCocktailContainer(props) {
  const [cocktails, setCocktails] = useState([])
  const url = "/api/v1/popular";

  useEffect(() => {
    function fetchCocktails() {
      axios.get(url)
      .then(response => {
        setCocktails(response.data.drinks)
      })
    }
    fetchCocktails();
  }, [])


  return (
    <Container >
      <Grid container spacing={3}>
        {cocktails.map( cocktail => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Cocktail cocktail={cocktail} />
            </Grid>
          )
        })}
    </Grid>
  </Container>
  
)
}
export default PopularCocktailContainer;

