import React, { Component } from 'react';
import Cocktail from './cocktail';
import axios from "axios";
import { Container, Grid } from '@material-ui/core';
// import axios from 'axios';
// import Giphy from './Giphy'
// import GiphySearch from './GiphySearch'
// import TwilioForm from './TwilioForm'


class PopularCocktailContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
          cocktails: [],

        }
    }

    componentDidMount() {
      const url = "/api/v1/popular";
      let cocktails;
      axios.get(url)
      .then(response => {
        // handle success
        cocktails = response.data.drinks;
        this.setState({cocktails})
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    render() {
      
        let { cocktails } = this.state;

        return (
          <Container >
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
        
      )
    }
}
export default PopularCocktailContainer;

