import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from './Details.js';


function Recipe(props){

const { 
    name 
} = props;

        return(
            <div>
                    <Link to={"/"+ name}>{name}</Link>
                    <br></br>
                    

            </div>
        )
}


export default Recipe;