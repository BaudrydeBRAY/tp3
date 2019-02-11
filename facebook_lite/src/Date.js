import React, { Component } from 'react';

class Date extends Component {
  render() {
    const date = this.props.date;

    return (
      <div>
        <h4>{date}</h4>
      </div>
    );
  }
}

export default Date
