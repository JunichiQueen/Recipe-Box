import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component{
    createRecipe = (e) => {
        e.preventDefault();
        let newRecipe = {
            recipename: e.target.value[0],
            description: e.target.value[1],
            ingredients: e.target.value[2]
        }
        axios.post('URL', newRecipe).then(response => {
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
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }

}

export default Create;