import React, { Component } from 'react';
import '../index.css'
import Pizza from '../pizzaData.js'
import MenuItem from './MenuItem'

class MenuList extends Component {
    render() {
        return (
            <div className="menu">
            <h1>Menu</h1>
            <div className="menu-container">
              {Pizza.map((item, i) => <MenuItem key={i} item ={item} />)}
            </div>
          </div>    
        )
    }
}

export default MenuList