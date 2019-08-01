import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class Details extends Component {




    deleteRecipe = () => {
        let newItem = {
            _id: this.props._id,
        }
        axios
        .delete('http://localhost:5000/recipe/deleteRecipe', { data: newItem }).then(res =>
            this.props.getAll()
        );
    }

    updateRecipe = (e) => {
        let updateItem = {
            _id: this.props._id,
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value    
        }
        axios
        .put('http://localhost:5000/recipe/updateRecipe', updateItem).then(res => {
            this.props.getAll()
        })
    }

    render(){
        console.log(this.props._id);
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>{this.props.ingredients}</p>
                <img src={this.props.image}/>
                <Button outline color='danger' onClick={this.deleteRecipe}>Delete Recipe</Button>
                <div>
                    <form onSubmit={this.updateRecipe}>
                        <p>RecipeName</p>
                        <input></input>
                        <p>Description</p>
                        <input></input>
                        <p>Ingredients</p>
                        <input></input>
                        <p>Image</p>
                        <input></input>
                        <Button outline color='warning' type="submit">Update Recipe</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Details;