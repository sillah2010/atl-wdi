import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className="location">
                <p>{this.props.location.name}</p>
                <p>Address: </p>
                <p>{this.props.location.address}</p>
                <p>Phone: </p>
                <p>{this.props.location.phone}</p>
            </div>
        );
    }
}

export default Location;
