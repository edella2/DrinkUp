import React, { useState, useEffect } from 'react';
import Cocktail from '../cocktailCard/cocktail';
import axios from "axios";
import { Container, Grid } from '@material-ui/core';
import CocktailGrid from '../cocktailGrid/cocktailGrid';



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
      <CocktailGrid cocktails={cocktails}/>
    </Container>
  )
}
export default PopularCocktailContainer;

