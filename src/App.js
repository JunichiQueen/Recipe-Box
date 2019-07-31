import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RecipeBox from './Recipes/RecipeBox.js';
import Create from './Recipes/Create.js';
import Navbar from './Recipes/Navbar.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      recipename: "",
      description: "",
      ingredients: ""
    }
  }
  getAllRecipes = () => {
    axios
    .get('URL').then(response => {
      this.setState({
        recipename: response.recipename,
        description: response.description,
        ingredients: response.ingredients
      })
    })
  }



  render(){
    return(
      <div>
        <Navbar />
        <Router>
      
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/create">Create</Link>
          <br></br>
          

      
          <Route path="/" component={RecipeBox}/>

          <Route path="/create" render={(props) => <Create getAll={this.getAllRecipes}/>}/>
  
        </Router> 

      </div>
    )
  }
}

export default App;
