import React, { Component } from 'react';


class Prenom extends Component {
  render() {
    const prenom = this.props.prenom;

    return (
      <div>
        <h4 className="Prenom">{prenom}</h4>
      </div>
    );
  }
}

export default Prenom
