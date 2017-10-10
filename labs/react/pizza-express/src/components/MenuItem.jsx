import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return(
            <div id="menu" className="menu-item">
            <img src={this.props.item.image} alt="pizza"/>
            <div className="menu-description">
              <div className="menu-item-name">{this.props.item.name}</div>
              <div> <p>Price:</p> {this.props.item.price}</div>
              <div>{this.props.item.description}</div>
            </div>
          </div>
        )
    }
}

export default MenuItem
