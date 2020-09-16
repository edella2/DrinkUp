import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/core/styles';

import { FormControl, Container } from '@material-ui/core';
import CocktailGrid from "../cocktailGrid/cocktailGrid";

const useStyles = makeStyles((theme) => ({
  search: {
    marginBottom: theme.spacing(3)
  }
}));

export default function SearchPage() {
  const classes = useStyles();

  const [cocktails, setCocktails] = useState([])
  const [term, setTerm] = useState("")

  const search_url = "/api/v1/search";
  const popular_url = "/api/v1/popular";

  function handleSearchTermChange(value) {
    if (value) {
      setTerm(value)
    }
  }

  useEffect(() => { 
    function searchCocktails(term) {
      axios.get(search_url, {
        params: { s: term }
      }).then(res => {
        if (res.data.drinks === null) {
          setCocktails([])
        }
        else if (res.data.drinks !== null) {
          setCocktails(res.data.drinks)
        }
      })
    }

    function popularCocktails() {
      axios.get(popular_url).then(res => {
        setCocktails(res.data.drinks)
      })
    }

    if (term !== "") {
      searchCocktails(term)
    } else if (term === "") {
      popularCocktails()
    }
  }, [term])

  return (
    <Container>
      <FormControl>
        <SearchBar className={classes.search} onChange={handleSearchTermChange} htmlFor="my-input">Search</SearchBar>
      </FormControl>
      <CocktailGrid key={cocktails} cocktails={cocktails}/>
    </Container>
  );
}
