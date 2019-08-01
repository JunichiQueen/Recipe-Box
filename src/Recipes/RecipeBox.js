import React, { Component } from 'react';
import axios from 'axios';
import {
    Table
} from 'reactstrap';

import Recipe from './Recipe.js';



class RecipeBox extends Component{


    render(){
        console.log(this.props.data);
        return(
            <div className="text-center">
                <h2>
                    Recipes
                </h2>
                <Table>
                    <tbody>
                        {this.props.data.map((item) => (
                            <tr key={item._id.toString()}><td><Recipe name={item.name} description={item.description} ingredients={item.ingredients}/></td></tr>
                        ))}
                    </tbody>
                </Table>
                
                
                
            </div>
        )
    }

}

export default RecipeBox;