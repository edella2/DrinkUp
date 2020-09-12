import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

export default function SearchPage() {
  const [cocktail, setCocktails] = useState({})
  const [term, setTerm] = useState("")
  const url = "/api/v1/cocktail/search";

  function searchCocktails(term) {
    axios.get(url, {
      params: { s: term }
    }).then(res => {
      setCocktails(res.data)
    })
  }

  function handleSearchTermChange(event) {
    debugger;
    console.log(event)
    if (event) {
      setTerm(event)
    }
  }

  useEffect(() => {
    if (term != "") {
      searchCocktails(term)
    }
  }, [])

  const classes = useStyles();

  return (
    <Container>
      <FormControl>
        <InputLabel htmlFor="my-input">Search</InputLabel>
        <Input onChange={handleSearchTermChange()} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </Container>
  );
}
