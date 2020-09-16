import React from 'react';
import Cocktail from '../cocktailCard/cocktail';
import { Grid } from '@material-ui/core';

function CocktailGrid(props) {
  return (
    <Grid container spacing={3}>
      {props.cocktails.map( cocktail => {
        return (
          <Grid item xs={12} sm={6} md={3}>
            <Cocktail cocktail={cocktail} />
          </Grid>
        )
      })}
    </Grid>
  )
}
export default CocktailGrid;