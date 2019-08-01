import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {

    // deleteRecipt = () => {
    //     axios.
    // }

    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>{this.props.ingredients}</p>
            </div>
        )
    }
}

export default Details;