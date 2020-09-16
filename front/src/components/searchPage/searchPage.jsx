import React, { useState, useEffect } from "react";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
import Cocktail from '../cocktailCard/cocktail';
import { FormControl, InputLabel, Input, Container, Grid } from '@material-ui/core';
import CocktailGrid from "../cocktailGrid/cocktailGrid";

// const useStyles = makeStyles((theme) => ({}));

export default function SearchPage() {
  // const classes = useStyles();

  const [cocktails, setCocktails] = useState([])
  const [term, setTerm] = useState("")

  const search_url = "/api/v1/search";
  const popular_url = "/api/v1/popular";

  function handleSearchTermChange(event) {
    const target = event.target.value;
    if (target) {
      setTerm(target)
    }
  }

  useEffect(() => { 
    function searchCocktails(term) {
      axios.get(search_url, {
        params: { s: term }
      }).then(res => {
        setCocktails(res.data.drinks)
      })
    }

    function popularCocktails() {
      axios.get(popular_url).then(res => {
        setCocktails(res.data.drinks)
      })
    }

    if (term !== "") {
      console.log(term)
      searchCocktails(term)
    } if (term === "") {
      popularCocktails()
    }
  }, [term])

  return (
    <Container>
      <FormControl>
        <InputLabel htmlFor="my-input">Search</InputLabel>
        <Input onChange={handleSearchTermChange} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <CocktailGrid cocktails={cocktails}/>
    </Container>
  );
}
