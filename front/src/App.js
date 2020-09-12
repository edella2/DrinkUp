import React from 'react';
import './App.css';
import PopularCocktailContainer from './components/popularCocktailContainer';
import CocktailPage from './components/cocktailPage';
import SearchPage from './components/searchPage';
import SearchAppBar from './components/searchAppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  console.log("app.js")
  return (    
    <Router>
      <SearchAppBar></SearchAppBar>
      <Switch>
        <Route path="/cocktail/:id" component={CocktailPage} exact/>
        <Route path="/search" component={SearchPage} exact/>
        <Route path="/" component={PopularCocktailContainer} exact/>
      </Switch>
    </Router>
  )
}

export default App;