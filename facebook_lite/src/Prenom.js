import React, { Component } from 'react';

class Prenom extends Component {
  render() {
    const prenom = this.props.prenom;

    return (
      <div>
        <h4>{prenom}</h4>
      </div>
    );
  }
}

export default Prenom
