import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
import { shallow } from "enzyme";
import Navbar from '../Recipes/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeBox from '../Recipes/RecipeBox.js';
import Create from '../Recipes/Create.js';
import renderer from 'react-test-renderer'

import { exportAllDeclaration } from '@babel/types';
import Recipe from '../Recipes/Recipe';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains navbar', () => {
  const wrapper = shallow(<App />);
  const content = <Navbar />
  expect(wrapper.contains(content)).toEqual(true);
});

it('snapshot app', () => {
  const wrapper = renderer.create(<App />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

let getAllRecipes = () => {
  axios
  .get('http://localhost:5000/recipe/all').then(response => {
    this.setState({
      data: response.data
    })
  })
}

it('render a prop', () => {
  const wrapper = shallow(<Create getAll={getAllRecipes} title="A Title"/>);
  expect(wrapper.instance().props.title).toEqual("A Title");
  expect(wrapper).toMatchSnapshot();
});
