import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component{
    createRecipe = (e) => {
        e.preventDefault();
        let newRecipe = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value
        }
        axios.post('http://localhost:5000/recipe/createRecipe', newRecipe).then(response => {
            this.props.getAll();
        }).catch(err => console.log(err));
    }

    render(){
        return(
            <div className="text-center jumbotron">
                <form onSubmit={this.createRecipe}>
                    <p>Recipename</p>
                    <input></input>
                    <p>Description</p>
                    <input></input>
                    <p>Ingredients</p>
                    <input></input>
                    <p>Image</p>
                    <input></input>
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }

}

export default Create;