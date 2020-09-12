import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Cocktail from './cocktail';
import { FormControl, Select, Container, Grid, MenuItem, Chip, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, ingredients, theme) {
  return {
    fontWeight:
      ingredients.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function IngredientSearchPage() {
  const classes = useStyles();
  const theme = useTheme();

  const [cocktails, setCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredients_list, setIngredientsList] = useState([])
  const url = "/api/v1/filter";
  const list_url = "/api/v1/ingredients";

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

  function getIngredientsList() {
    console.log("list")
    axios.get(list_url, {
      params: { i: 'list' }
    }).then(res => {
      setIngredientsList(res.data)
    })
  }

  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  useEffect(() => {
    getIngredientsList()
  }, [])

  useEffect(() => { 
    filterCocktails()
  }, [ingredients])

  return (
    <Container>
      <FormControl>
        <InputLabel id="demo-mutiple-chip-label">Ingredient's</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
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
          MenuProps={MenuProps}
        >
          {ingredients_list.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, ingredients, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <Grid container spacing={3}>
          {cocktails.map( cocktail => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Cocktail cocktail={cocktail} />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
}
