import React, { Component } from 'react';
import '../index.css'
import PizzaOven from '../images/pizzaoven.jpg'

class Description extends Component {
    render() {
        return (   
            <div className="description">
            <img src={PizzaOven}  alt="pizzaOven"/>    
            <p>Give thanks to the most high. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. 
             Look at the sunset, life is amazing, life is beautiful, life is what you make it. Look at the sunset, life is amazing, life is beautiful, life is what you make it.
             You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. 
             I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Stay focused.</p>
             </div>  
        )
    }
}

export default Description