import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container } from '@material-ui/core';
import CocktailGrid from '../cocktailGrid/cocktailGrid';



function PopularPage(props) {
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
      <CocktailGrid key={cocktails} cocktails={cocktails}/>
    </Container>
  )
}
export default PopularPage;

