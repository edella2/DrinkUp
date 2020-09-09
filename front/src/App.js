import React from 'react';
import './App.css';
import PopularCocktailContainer from './components/popularCocktailContainer';
import CocktailPage from './components/cocktailPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router basename="/">
      <Switch>
        <Route path="/cocktail/:id" exact>
          <CocktailPage />
        </Route>
        <Route path="*">
          <PopularCocktailContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
