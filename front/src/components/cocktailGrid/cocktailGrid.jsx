import React from 'react';
import Cocktail from '../cocktailCard/cocktail';
import { Grid, Typography } from '@material-ui/core';

function CocktailGrid(props) {
  return (
    <Grid container spacing={3}>
      {props.cocktails.length > 0 ? props.cocktails.map( cocktail => {
        return (
          <Grid key={cocktail.idDrink} item xs={12} sm={6} md={3}>
            <Cocktail cocktail={cocktail} />
          </Grid>
        )
      }) :
      <Grid item xs={12}>
        <Typography>No Cocktails found, please update search parameters.</Typography>
      </Grid>
    }
    </Grid>
  )
}
export default CocktailGrid;