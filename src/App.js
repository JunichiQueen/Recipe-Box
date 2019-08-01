import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RecipeBox from './Recipes/RecipeBox.js';
import Create from './Recipes/Create.js';
import Navbar from './Recipes/Navbar.js';
import Details from './Recipes/Details.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  getAllRecipes = () => {
    axios
    .get('http://localhost:5000/recipe/all').then(response => {
      this.setState({
        data: response.data
      })
    })
  }
  componentDidMount = () => {
    this.getAllRecipes();
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
          

      
          <Route path="/" render={(props) => <RecipeBox getAll={this.getAllRecipes} data={this.state.data}/>}/>

          <Route path="/create" render={(props) => <Create getAll={this.getAllRecipes}/>}/>
          {this.state.data.map((item) => (
            <Route path={"/"+ item.name} render={(props) => <Details name={item.name} description={item.description} ingredients={item.ingredients}/>}/>
          ))}
          
        </Router>

      </div>
    )
  }
}

export default App;
