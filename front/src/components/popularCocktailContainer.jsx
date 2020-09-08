import React, { Component } from 'react';
import Cocktail from './cocktail';
import axios from "axios";
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
        // this.searchNewGifs = this.searchNewGifs.bind(this);
        // this.twilioSubmit = this.twilioSubmit.bind(this);
        // this.randomNewGif = this.randomNewGif.bind(this);
        // this.nextRandomGif = this.nextRandomGif.bind(this);
    }

    componentDidMount() {
      const url = "http://localhost:3000/api/v1/popular";
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
        return cocktails.map( cocktail => {
          return (
            <div key={cocktail.id} className="cocktail-boxes" >
                <Cocktail cocktail={cocktail} />
            </div>
        )
      })
    }
}
export default PopularCocktailContainer;

