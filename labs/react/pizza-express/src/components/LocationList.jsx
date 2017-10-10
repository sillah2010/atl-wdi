import React, { Component } from 'react'
import Location from './Location'
import locations from '../locationData.js'
import '../index.css'

class Locations extends Component {
    render() {
        return (
            <div id="locations">
                <h1>Locations :</h1>
                <div className="locations">
                    {locations.map((location, i) => <Location key={i} location={location} />)}
                </div>
            </div>
        );
    }
}

export default Locations;