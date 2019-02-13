import React, { Component } from 'react';
import "./Date.css"

class Date extends Component {
  render() {
    const date = this.props.date;

    return (
      <div>
        <h4 className="Date">{date}</h4>
      </div>
    );
  }
}

export default Date
