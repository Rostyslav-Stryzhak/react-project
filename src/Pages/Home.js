import React, { Component } from 'react';
import './Home.css';
import backgroundImage from '../Components/metallica.bacground.jpeg';

export default class Header extends Component{
    render(){
        return(
            <div className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Metallica fun webpage</h1>
            </div>
        )
    }
}
