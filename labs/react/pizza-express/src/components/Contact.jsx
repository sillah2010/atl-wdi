import React, { Component } from 'react';
import '../index.css'

class Contact extends Component {
    render() {
      return (
        <div className="contact">
          <h1>Store Hours</h1>
          <p><p>Sunday-Thursday:</p> 11:00am to 12:00am | <p>Sunday-Thursday:</p> 11:00am to 1:00am</p>
          <div>
            <p><p>Phone: </p> 404-555-1234</p>
            <p><p>Email: </p> pizzaheaven@yes.please</p>
          </div>
        </div>
      );
    }
  }
  
  export default Contact;