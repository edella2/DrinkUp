import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, Container, MenuItem, Chip, Input, Typography } from '@material-ui/core';
import CocktailGrid from "../cocktailGrid/cocktailGrid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
  },
}));

export default function IngredientSearchPage() {
  const classes = useStyles();

  const [cocktails, setCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredients_list, setIngredientsList] = useState([])

  const url = "/api/v1/filter";
  const list_url = "/api/v1/ingredients";

  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  useEffect(() => {
    function getIngredientsList() {
      console.log("list")
      axios.get(list_url, {
        params: { i: 'list' }
      }).then(res => {
        setIngredientsList(res.data)
      })
    }
    getIngredientsList()
  }, [])

  useEffect(() => { 
    function filterCocktails() {
      let param_ing = ingredients.join()
      axios.get(url, {
        params: { i: param_ing },
      }).then(res => {
        if (res.data.drinks === "None Found" ) {
          setCocktails([])
        }
        else if (res.data.drinks !== "None Found") {
          setCocktails(res.data.drinks)
        }
      })
    }
    filterCocktails()
  }, [ingredients])

  return (
    <Container>
      <FormControl className={classes.formControl}>
        <Typography>Ingredients</Typography>
        <Select
          id="mutiple-chip"
          multiple
          value={ingredients}
          onChange={handleIngredientsChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={() => (
            <div className={classes.chips}>
              {ingredients.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {ingredients_list.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CocktailGrid key={cocktails} cocktails={cocktails}/>
    </Container>
  );
}
