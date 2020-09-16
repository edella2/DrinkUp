import React from 'react';
import './App.css';
import PopularPage from './components/popularPage/popularCocktailContainer';
import CocktailPage from './components/cocktailPage/cocktailPage';
import SearchPage from './components/searchPage/searchPage';
import IngredientSearchPage from './components/ingredientSearchPage/ingredientSearchPage';
import TabBar from './components/tabBar/tabBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  console.log("app.js")
  return (    
    <Router>
      <TabBar></TabBar>
      <Switch>
        <Route path="/cocktail/:id" component={CocktailPage} exact/>
        <Route path="/search" component={SearchPage} exact/>
        <Route path="/ingredients" component={IngredientSearchPage} exact/>
        <Route path="/" component={PopularPage} exact/>
      </Switch>
    </Router>
  )
}

export default App;