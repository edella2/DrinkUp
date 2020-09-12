import React, { useState, useEffect } from "react";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
import Cocktail from './cocktail';
import { FormControl, InputLabel, Input, Container, Grid } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({}));

export default function SearchPage() {
  // const classes = useStyles();

  const [cocktails, setCocktails] = useState([])
  const [term, setTerm] = useState("")
  const url = "/api/v1/search";

  function searchCocktails(term) {
    axios.get(url, {
      params: { s: term }
    }).then(res => {
      setCocktails(res.data.drinks)
    })
  }

  function handleSearchTermChange(event) {
    const target = event.target.value;
    if (target) {
      setTerm(target)
    }
  }

  useEffect(() => { 
    if (term !== "") {
      searchCocktails(term)
    }
  }, [term])

  return (
    <Container>
      <FormControl>
        <InputLabel htmlFor="my-input">Search</InputLabel>
        <Input onChange={handleSearchTermChange} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
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
  );
}
